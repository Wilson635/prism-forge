import React, {Component, useEffect, useMemo, useRef, useState} from 'react';
import type {ReactNode} from 'react';
import * as Babel from '@babel/standalone';
import * as LucideIcons from 'lucide-react';
import * as FramerMotion from 'framer-motion';
import {ArrowUpRight, Check, ChevronDown, Sparkles} from 'lucide-react';
import type {Block, PreviewTone} from '@/data/data';



type ImportedBinding = {
    source: string;
    imported: string;
};

const PREVIEW_RUNTIME_BINDINGS = ['React', 'useState', 'useEffect', 'useMemo', 'useRef'];

function createFallbackIcon() {
    return function PreviewFallbackIcon(props: Record<string, unknown> = {}) {
        const {style, ...rest} = props;
        return React.createElement('span', {
            ...rest,
            'aria-hidden': true,
            style: {
                display: 'inline-block',
                width: 14,
                height: 14,
                border: '1.5px solid currentColor',
                borderRadius: 4,
                verticalAlign: '-0.15em',
                ...(style as Record<string, unknown> | undefined),
            },
        });
    };
}

function resolveImportedBinding(binding: ImportedBinding) {
    const {source, imported} = binding;

    if (source === 'react') {
        if (imported === 'default' || imported === '*') return React;
        const reactRuntime = React as unknown as Record<string, unknown>;
        return reactRuntime[imported] ?? undefined;
    }

    if (source === 'framer-motion') {
        if (imported === '*') return FramerMotion;
        return (FramerMotion as any)[imported] ?? undefined;
    }

    if (source === 'lucide-react' || source.startsWith('lucide-react/')) {
        if (imported === '*') return LucideIcons;
        return LucideIcons[imported as keyof typeof LucideIcons] ?? createFallbackIcon();
    }

    // Heroicons are common in copied Tailwind examples. Use the closest
    // lucide equivalent where possible, then a harmless visual fallback.
    if (source.startsWith('@heroicons/')) {
        const heroiconAliases: Record<string, string> = {
            CloudArrowUpIcon: 'CloudUpload',
            LockClosedIcon: 'LockKeyhole',
            ServerIcon: 'Server',
        };
        const lucideName = heroiconAliases[imported] ?? imported.replace(/Icon$/, '');
        return LucideIcons[lucideName as keyof typeof LucideIcons] ?? createFallbackIcon();
    }

    if (imported === '*') return {};
    if (imported === 'default') return '';
    return createFallbackIcon();
}

function stripModuleSyntax(importedBindings: Map<string, ImportedBinding>) {
    return {
        visitor: {
            ImportDeclaration(path: any) {
                const source = String(path.node.source.value);
                for (const specifier of path.node.specifiers ?? []) {
                    if (specifier.importKind === 'type') continue;

                    if (specifier.type === 'ImportDefaultSpecifier') {
                        importedBindings.set(specifier.local.name, {source, imported: 'default'});
                    } else if (specifier.type === 'ImportNamespaceSpecifier') {
                        importedBindings.set(specifier.local.name, {source, imported: '*'});
                    } else if (specifier.type === 'ImportSpecifier' && specifier.importKind !== 'type') {
                        const imported = typeof specifier.imported.name === 'string'
                            ? specifier.imported.name
                            : specifier.imported.value;
                        importedBindings.set(specifier.local.name, {source, imported});
                    }
                }
                path.remove();
            },
            ExportDefaultDeclaration(path: any) {
                const declaration = path.node.declaration;
                const defaultComponentName = '__PreviewDefaultExport';

                const createElementCall = {
                    type: 'CallExpression',
                    callee: {
                        type: 'MemberExpression',
                        object: {type: 'Identifier', name: 'React'},
                        property: {type: 'Identifier', name: 'createElement'},
                        computed: false,
                    },
                    arguments: [{type: 'Identifier', name: defaultComponentName}],
                };

                // Support copied components such as:
                // `export default function Example() { return (...) }`.
                if (declaration.type === 'FunctionDeclaration' && declaration.id?.name) {
                    path.replaceWithMultiple([
                        declaration,
                        {
                            type: 'ReturnStatement',
                            argument: {
                                ...createElementCall,
                                arguments: [{type: 'Identifier', name: declaration.id.name}],
                            },
                        },
                    ]);
                } else if (
                    declaration.type === 'FunctionDeclaration' ||
                    declaration.type === 'FunctionExpression' ||
                    declaration.type === 'ArrowFunctionExpression' ||
                    declaration.type === 'ClassDeclaration' ||
                    declaration.type === 'ClassExpression'
                ) {
                    // Also support `export default () => <Component />` and
                    // anonymous default component declarations.
                    const hasNamedDeclaration = declaration.type.endsWith('Declaration') && Boolean(declaration.id?.name);
                    const componentDeclaration = hasNamedDeclaration
                        ? declaration
                        : {
                            type: 'VariableDeclaration',
                            kind: 'const',
                            declarations: [{
                                type: 'VariableDeclarator',
                                id: {type: 'Identifier', name: defaultComponentName},
                                init: declaration,
                            }],
                        };
                    path.replaceWithMultiple([
                        componentDeclaration,
                        {
                            type: 'ReturnStatement',
                            argument: hasNamedDeclaration
                                ? {
                                    ...createElementCall,
                                    arguments: [{
                                        type: 'Identifier',
                                        name: declaration.id?.name ?? defaultComponentName,
                                    }],
                                }
                                : createElementCall,
                        },
                    ]);
                } else {
                    // Also support `export default <Component />`.
                    path.replaceWith({type: 'ReturnStatement', argument: declaration});
                }
            },
            ExportNamedDeclaration(path: any) {
                if (path.node.declaration) {
                    path.replaceWith(path.node.declaration);
                } else {
                    path.remove();
                }
            },
        },
    };
}

function wrapTrailingJsxWithReturn() {
    return {
        visitor: {
            Program(path: any) {
                const body = path.node.body;
                const last = body[body.length - 1];
                if (
                    last &&
                    last.type === 'ExpressionStatement' &&
                    (last.expression.type === 'JSXElement' || last.expression.type === 'JSXFragment')
                ) {
                    body[body.length - 1] = {
                        type: 'ReturnStatement',
                        argument: last.expression,
                    };
                }
            },
        },
    };
}

type CompiledBlock =
    | { status: 'ok'; GeneratedBlock: React.ComponentType }
    | { status: 'error'; message: string };

function looksLikeStaticHtml(trimmedCode: string) {
    // Anything with these markers is unambiguously JSX/TSX — camelCase event
    // handlers, className, brace-delimited attribute values, imports and
    // exports never appear in plain HTML. Bail out early so real React
    // snippets (which very commonly use onClick=, onChange=, data-testid=,
    // style={{...}}) are never misdetected as static HTML just because they
    // share an attribute *name* with plain HTML.
    const isDefinitelyJsx = /\bimport\b|\bexport\s+default\b|className\s*=|=\s*\{|<>/.test(trimmedCode);
    if (isDefinitelyJsx) return false;

    const hasDocumentStructure = /<!doctype\s+html|<html[\s>]|<head[\s>]|<body[\s>]/i.test(trimmedCode);
    // These are only reliable HTML-only signals when written the way real
    // HTML writes them: lowercase, and (for event handlers) with a plain
    // quoted string value rather than a JSX expression container. JSX always
    // uses className/htmlFor and camelCase handlers, so a lowercase match
    // here means genuine markup, not a copied component.
    const hasHtmlOnlyAttribute = /(?:^|[\s<])(?:class|for)\s*=/.test(trimmedCode);
    const hasInlineHtmlHandler = /(?:^|[\s<])on[a-z]+\s*=\s*"/.test(trimmedCode);

    return hasDocumentStructure || hasHtmlOnlyAttribute || hasInlineHtmlHandler;
}

function compileBlockComponent(code: string): CompiledBlock {
    const trimmedCode = code.trim();
    const looksLikeHtml = looksLikeStaticHtml(trimmedCode);

    if (looksLikeHtml) {
        // Keep normal HTML out of the JSX compiler. This supports attributes
        // such as class= and for= as well as complete HTML documents.
        const html = trimmedCode.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
        const GeneratedHtml = () => React.createElement('div', {
            className: 'html-live-preview',
            dangerouslySetInnerHTML: {__html: html},
        });
        return {status: 'ok', GeneratedBlock: GeneratedHtml};
    }

    const importedBindings = new Map<string, ImportedBinding>();
    try {
        const {code: transformed} = Babel.transform(code, {
            // Remove TypeScript syntax before the generated function is
            // evaluated. This is important for snippets copied from .tsx.
            presets: [
                ['typescript'],
                ['react', {runtime: 'classic'}],
            ],
            plugins: [stripModuleSyntax(importedBindings), wrapTrailingJsxWithReturn],
            filename: 'block.tsx',
        });

        const iconNames = Object.keys(LucideIcons);
        const iconValues = Object.values(LucideIcons);
        const importedNames = [...importedBindings.keys()].filter(
            name => !PREVIEW_RUNTIME_BINDINGS.includes(name) && !iconNames.includes(name),
        );
        const importedValues = importedNames.map(name => resolveImportedBinding(importedBindings.get(name)!));

        // eslint-disable-next-line no-new-func
        const factory = new Function(
            'React',
            'useState',
            'useEffect',
            'useMemo',
            'useRef',
            ...iconNames,
            ...importedNames,
            `"use strict";\nreturn function GeneratedBlock() {\n${transformed}\n}`,
        );

        const GeneratedBlock = factory(
            React,
            useState,
            useEffect,
            useMemo,
            useRef,
            ...iconValues,
            ...importedValues,
        ) as React.ComponentType;

        return {status: 'ok', GeneratedBlock};
    } catch (error) {
        return {status: 'error', message: error instanceof Error ? error.message : 'Unknown render error'};
    }
}

class PreviewErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
    state = {hasError: false};

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: unknown) {
        // Keep this a console warning, not a thrown error — one broken block
        // should never take down the whole blocks page.
        console.error('Block preview crashed while rendering:', error);
    }

    componentDidUpdate(prevProps: { children: ReactNode }) {
        if (prevProps.children !== this.props.children && this.state.hasError) {
            this.setState({hasError: false});
        }
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}

function LivePreviewError({block, detail}: { block: Block; detail?: string }) {
    return (
        <div
            className="real-ui live-preview-error"
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                padding: 24,
                borderRadius: 12,
                border: '1px dashed #d4d4d8',
                color: '#71717a',
                fontSize: 13,
            }}
        >
            <span>No live preview available yet for "{block.name}".</span>
            {detail && <code style={{fontSize: 11, opacity: 0.7}}>{detail}</code>}
        </div>
    );
}

function LiveBlockPreview({block}: { block: Block }) {
    const compiled = useMemo(() => compileBlockComponent(block.code), [block.id, block.code]);

    if (compiled.status === 'error') {
        return <LivePreviewError block={block} detail={compiled.message}/>;
    }

    const {GeneratedBlock} = compiled;
    return (
        <PreviewErrorBoundary key={block.id} fallback={<LivePreviewError block={block}/>}>
            <div className="real-ui live-preview">
                <GeneratedBlock/>
            </div>
        </PreviewErrorBoundary>
    );
}

export function MiniPreview({tone, type = 'browser'}: { tone: PreviewTone; type?: string }) {
    return <div className={`mini-preview ${tone} ${type}`}>
        <div className="mini-top"><span/><span/><span/><b/></div>
        {type === 'browser' ? <>
            <div className="mini-hero-line"/>
            <div className="mini-hero-line short"/>
            <div className="mini-button"/>
            <div className="mini-cards"><i/><i/><i/></div>
        </> : <>
            <div className="mini-sidebar"/>
            <div className="mini-panel">
                <div/>
                <div/>
                <div/>
            </div>
        </>}</div>;
}

export function RealBlockPreview({block}: { block: Block }) {
    const [chosenPlan, setChosenPlan] = useState('Pro');
    const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
    const [joined, setJoined] = useState(false);
    if (block.id === 'pricing') return <div className="real-ui pricing-ui">
        <div className="pricing-heading">
            <div className="real-ui-intro"><span className="real-eyebrow">Simple pricing</span><h3>Pick the plan that
                fits your pace.</h3><p>Start free, upgrade when your team is ready.</p></div>
            <div className="billing-toggle">
                <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}
                        data-testid="button-billing-monthly">Monthly
                </button>
                <button className={billing === 'annual' ? 'active' : ''} onClick={() => setBilling('annual')}
                        data-testid="button-billing-annual">Annual <span>save 20%</span></button>
            </div>
        </div>
        <div
            className="pricing-cards">{[['Basic', billing === 'monthly' ? '$19' : '$190', ['3 projects', 'Basic analytics', 'Email support']], ['Pro', billing === 'monthly' ? '$49' : '$490', ['Unlimited projects', 'Advanced analytics', 'Priority support']], ['Enterprise', billing === 'monthly' ? '$99' : '$990', ['Unlimited everything', 'Custom integrations', 'Dedicated success']]].map(([name, price, features]) =>
            <div className={`price-card ${chosenPlan === name ? 'chosen' : ''}`} key={name as string}>
                <div className="price-card-top"><span>{name as string}</span>{name === 'Pro' && <b>Most popular</b>}
                </div>
                <strong>{price as string}<small>/{billing === 'monthly' ? 'mo' : 'yr'}</small></strong>
                <ul>{(features as string[]).map(feature => <li key={feature}><Check size={13}/>{feature}</li>)}</ul>
                <button onClick={() => setChosenPlan(name as string)}
                        data-testid={`button-choose-${(name as string).toLowerCase()}`}>{chosenPlan === name ? 'Selected' : `Choose ${name as string}`}</button>
            </div>)}</div>
        <div className="real-status"><Check size={13}/> {chosenPlan} plan selected · Change anytime</div>
    </div>;
    if (block.id === 'hero') return <div className="real-ui hero-ui">
        <div className="hero-ui-copy"><span className="real-eyebrow">Introducing Orbit</span><h3>Your work,<br/><em>in
            focus.</em></h3><p>A calmer way to plan, build, and ship your best work with your team.</p>
            <div className="real-actions">
                <button onClick={() => setJoined(!joined)}
                        data-testid="button-hero-start">{joined ? 'You are on the list' : 'Start building'}
                    <ArrowUpRight size={13}/></button>
                <span>Free for 14 days</span></div>
        </div>
        <div className="hero-ui-product">
            <div className="product-nav"><span>orbit</span><small>Today <ChevronDown size={11}/></small></div>
            <div className="product-welcome">Good morning, Camille <span>✦</span></div>
            <div className="product-stats">
                <div><small>In progress</small><b>12</b><i>+18%</i></div>
                <div><small>Completed</small><b>84</b><i>+24%</i></div>
            </div>
            <div className="product-list"><span/><span/><span/></div>
        </div>
    </div>;
    if (block.id === 'bento') return <div className="real-ui bento-ui">
        <div className="bento-main"><span className="real-eyebrow">Everything in focus</span><h3>Build
            without<br/><em>limits.</em></h3><p>One thoughtful workspace for all the work that moves your product
            forward.</p>
            <button onClick={() => setJoined(!joined)}
                    data-testid="button-bento-explore">{joined ? 'Exploring now' : 'Explore workspace'} <ArrowUpRight
                size={13}/></button>
            <div className="bento-chart"><span/><span/><span/><span/><span/><span/></div>
        </div>
        <div className="bento-side">
            <div className="bento-number"><strong>48</strong><span>ready-to-use blocks</span></div>
            <div className="bento-note"><Sparkles size={17}/><span>Designed for<br/><b>momentum.</b></span></div>
        </div>
    </div>;
    if (block.id === 'stats') return <div className="real-ui stats-ui">
        <div className="real-ui-intro"><span className="real-eyebrow">By the numbers</span><h3>The signal is clear.</h3>
        </div>
        <div
            className="stats-cards">{[['Active users', '24.8k', '+18.4%', 'mint'], ['Revenue', '$84.2k', '+12.8%', 'blue'], ['Conversion', '8.64%', '+4.6%', 'violet'], ['Projects shipped', '1,284', '+24.1%', 'amber']].map(([label, value, change, color]) =>
            <div className={`stat-card ${color}`} key={label as string}>
                <small>{label as string}</small><strong>{value as string}</strong><span><ArrowUpRight
                size={12}/>{change as string}</span>
                <div className="stat-spark"><i/><i/><i/><i/><i/></div>
            </div>)}</div>
    </div>;
    if (block.id === 'cta') return <div className="real-ui cta-ui">
        <div><span className="real-eyebrow">Ready when you are</span><h3>Make something<br/><em>people remember.</em>
        </h3><p>A better starting point is waiting for you.</p></div>
        <button onClick={() => setJoined(!joined)}
                data-testid="button-cta-start">{joined ? 'Welcome aboard' : 'Get started'} <ArrowUpRight size={15}/>
        </button>
    </div>;
    if (block.id === 'form') return <div className="real-ui form-ui">
        <div><span className="real-eyebrow">Join the waitlist</span><h3>Be first in line.</h3><p>Get product updates and
            early access, straight to your inbox.</p></div>
        <div className="real-form"><input placeholder="you@company.com" aria-label="Email address"
                                          data-testid="input-waitlist-email"/>
            <button onClick={() => setJoined(true)} data-testid="button-join-waitlist">{joined ? <><Check
                size={14}/> You're in</> : <>Join waitlist <ArrowUpRight size={14}/></>}</button>
        </div>
    </div>;
    return <LiveBlockPreview block={block}/>;
}