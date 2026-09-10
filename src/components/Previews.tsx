import React, {Component, useEffect, useMemo, useRef, useState} from 'react';
import type {ReactNode} from 'react';
import * as Babel from '@babel/standalone';
import * as LucideIcons from 'lucide-react';
import * as FramerMotion from 'framer-motion';
import type {Block, PreviewTone} from '@/catalog';



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

function NativeBlockPreview({block}: { block: Block }) {
    const Preview = block.Component!;
    return (
        <PreviewErrorBoundary key={block.id} fallback={<LivePreviewError block={block}/>}>
            <div className="playground-preview-root">
                <Preview/>
            </div>
        </PreviewErrorBoundary>
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
            <div className="playground-preview-root">
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
    if (block.Component) return <NativeBlockPreview block={block}/>;
    return <LiveBlockPreview block={block}/>;
}