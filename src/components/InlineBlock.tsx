import {useCallback, useEffect, useRef, useState} from 'react';
import {Check, Code2, Copy, Loader2, Monitor, Sparkles, Smartphone} from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import {EditorView, keymap} from '@codemirror/view';
import {indentWithTab} from '@codemirror/commands';
import {javascript} from '@codemirror/lang-javascript';
import {html} from '@codemirror/lang-html';
import {createTheme} from '@uiw/codemirror-themes';
import {tags as t} from '@lezer/highlight';
import * as prettier from 'prettier/standalone';
import * as prettierPluginBabel from 'prettier/plugins/babel';
import * as prettierPluginEstree from 'prettier/plugins/estree';
import * as prettierPluginHtml from 'prettier/plugins/html';
import type {Block} from '@/data/data';
import {RealBlockPreview} from './Previews';

type CodeLanguage = 'react' | 'html';

/**
 * Real Prettier formatting, running in the browser via the standalone
 * build — no Node.js dependency, so this works fine in a Vite bundle.
 * `babel-ts` handles both plain JSX and TSX (typed) source in one parser,
 * so we don't need a separate typescript/estree-only plugin for that case.
 */
async function formatSourceCode(source: string, language: CodeLanguage) {
  const normalized = source.replace(/\r\n/g, '\n').trim();
  if (!normalized) return '';

  if (language === 'html') {
    return prettier.format(normalized, {
      parser: 'html',
      plugins: [prettierPluginHtml],
      tabWidth: 2,
      htmlWhitespaceSensitivity: 'ignore',
    });
  }

  return prettier.format(normalized, {
    parser: 'babel-ts',
    plugins: [prettierPluginBabel, prettierPluginEstree],
    tabWidth: 2,
    printWidth: 80,
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
  });
}

/**
 * Custom CodeMirror 6 theme matching the editor's existing dark chrome
 * (transparent background so the gradient behind it stays visible, mint
 * accent for keywords/tags to echo the React tab dot color).
 */
const editorTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent',
    backgroundImage: '',
    foreground: '#bdbdbd',
    caret: '#f4f4f5',
    selection: 'rgba(97, 218, 251, 0.18)',
    selectionMatch: 'rgba(97, 218, 251, 0.12)',
    lineHighlight: 'rgba(255,255,255,0.03)',
    gutterBackground: 'transparent',
    gutterForeground: '#454545',
    gutterActiveForeground: '#a1a1aa',
    gutterBorder: 'transparent',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  styles: [
    {tag: t.comment, color: '#5c6370', fontStyle: 'italic'},
    {tag: [t.keyword, t.operatorKeyword, t.controlKeyword, t.moduleKeyword], color: '#61dafb'},
    {tag: [t.string, t.special(t.string)], color: '#e6c07b'},
    {tag: [t.number, t.bool, t.null, t.atom], color: '#d19a66'},
    {tag: [t.function(t.variableName), t.definition(t.function(t.variableName))], color: '#a7f3d0'},
    {tag: t.variableName, color: '#bdbdbd'},
    {tag: t.definition(t.variableName), color: '#f4f4f5'},
    {tag: [t.tagName], color: '#f59e0b'},
    {tag: [t.attributeName], color: '#61dafb'},
    {tag: [t.propertyName], color: '#c084fc'},
    {tag: [t.punctuation, t.bracket, t.separator], color: '#71717a'},
    {tag: t.className, color: '#4ade80'},
    {tag: t.typeName, color: '#4ade80'},
    {tag: t.operator, color: '#71717a'},
    {tag: t.invalid, color: '#f87171'},
  ],
});

function CodeEditor({
                      blockId,
                      language,
                      value,
                      onChange,
                      onFormat,
                      isFormatting,
                      formatError,
                      onCopy,
                      copied,
                      onLanguageChange,
                    }: {
  blockId: string;
  language: CodeLanguage;
  value: string;
  onChange: (value: string) => void;
  onFormat: () => void;
  isFormatting: boolean;
  formatError: string | null;
  onCopy: () => void;
  copied: boolean;
  onLanguageChange: (language: CodeLanguage) => void;
}) {
  const lineCount = Math.max(1, value.split('\n').length);

  const editorExtensions = [
    language === 'react' ? javascript({jsx: true, typescript: true}) : html(),
    keymap.of([indentWithTab]),
    EditorView.lineWrapping,
  ];

  return (
    <div
      className="code-editor"
      data-testid={`code-editor-${blockId}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: 'none',
        background:
          'linear-gradient(180deg, rgba(21,26,23,0.65) 0%, rgba(9,11,10,0.92) 100%), linear-gradient(180deg, #151a17 0%, #090b0a 100%)',
        backgroundBlendMode: 'overlay, normal',
        color: '#f1f5f2',
        backdropFilter: 'blur(30px) saturate(140%)',
        WebkitBackdropFilter: 'blur(30px) saturate(140%)',
        scrollbarWidth: 'none',
        boxShadow:
          'inset 0 1px 0 rgba(241,245,242,.08), inset 0 0 40px rgba(62,207,142,.03), 0 40px 90px -30px rgba(0,0,0,.75), 0 12px 30px -10px rgba(0,0,0,.6)',
      }}
    >
      <div
        className="code-editor-tabs"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 56,
          padding: '0 12px 0 14px',
          borderBottom: '1px solid rgba(37,44,40,0.7)',
          background: 'transparent',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto'}}>
          <button
            className={language === 'react' ? 'active' : ''}
            onClick={() => onLanguageChange('react')}
            role="tab"
            aria-selected={language === 'react'}
            data-testid={`button-editor-react-${blockId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: language === 'react' ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
              borderRadius: 9,
              padding: '8px 10px',
              background: language === 'react' ? 'rgba(255,255,255,0.07)' : 'transparent',
              boxShadow: language === 'react' ? 'inset 0 1px 0 rgba(255,255,255,.06)' : 'none',
              color: language === 'react' ? '#f4f4f5' : '#71717a',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              font: '500 11px ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            <span style={{width: 8, height: 8, borderRadius: 3, background: '#61dafb'}}/>
            React / TSX
          </button>
          <button
            className={language === 'html' ? 'active' : ''}
            onClick={() => onLanguageChange('html')}
            role="tab"
            aria-selected={language === 'html'}
            data-testid={`button-editor-html-${blockId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: language === 'html' ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
              borderRadius: 9,
              padding: '8px 10px',
              background: language === 'html' ? 'rgba(255,255,255,0.07)' : 'transparent',
              boxShadow: language === 'html' ? 'inset 0 1px 0 rgba(255,255,255,.06)' : 'none',
              color: language === 'html' ? '#f4f4f5' : '#71717a',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              font: '500 11px ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            <span style={{width: 8, height: 8, borderRadius: 3, background: '#f59e0b'}}/>
            HTML
          </button>
        </div>
        <button
          onClick={onCopy}
          title={copied ? 'Code copié !' : 'Copier le code'}
          aria-label={copied ? 'Code copié' : 'Copier le code'}
          data-testid={`button-editor-copy-${blockId}`}
          style={{
            display: 'grid',
            flex: '0 0 auto',
            placeItems: 'center',
            width: 32,
            height: 32,
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 9,
            background: 'rgba(255,255,255,0.04)',
            color: copied ? '#a7f3d0' : '#a1a1aa',
            cursor: 'pointer',
          }}
        >
          {copied ? <Check size={14}/> : <Copy size={14}/>}
        </button>
      </div>
      <div style={{minHeight: 360, maxHeight: 520, overflow: 'auto'}}>
        <CodeMirror
          value={value}
          onChange={onChange}
          theme={editorTheme}
          extensions={editorExtensions}
          basicSetup={{
            lineNumbers: true,
            foldGutter: true,
            highlightActiveLine: true,
            highlightActiveLineGutter: true,
            bracketMatching: true,
            closeBrackets: true,
            indentOnInput: true,
            autocompletion: true,
            tabSize: 2,
          }}
          style={{fontSize: 13}}
          aria-label={`${language === 'react' ? 'React TSX' : 'HTML'} code editor`}
        />
      </div>
      <div
        className="code-editor-foot"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          alignItems: 'center',
          minHeight: 42,
          padding: '0 14px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'transparent',
          color: '#626262',
          font: '10px ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                    <span style={{display: 'inline-flex', alignItems: 'center', gap: 5}}>
                        <span style={{width: 5, height: 5, borderRadius: '50%', background: '#4ade80'}}/>
                        Live preview
                    </span>
          <span>{lineCount} lignes</span>
          {formatError && (
            <span title={formatError} style={{color: '#f87171', cursor: 'help'}}>
                            Erreur de syntaxe
                        </span>
          )}
        </div>
        <button
          onClick={onFormat}
          disabled={isFormatting}
          title="Formater le code avec Prettier"
          data-testid={`button-format-${blockId}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            border: 0,
            padding: '5px 0',
            background: 'transparent',
            color: '#a1a1aa',
            cursor: isFormatting ? 'wait' : 'pointer',
            opacity: isFormatting ? 0.6 : 1,
            font: 'inherit',
          }}
        >
          {isFormatting ? <Loader2 size={12} className="spin"/> : <Sparkles size={12}/>}
          {isFormatting ? 'Formatage…' : 'Formater'}
        </button>
      </div>
    </div>
  );
}

/**
 * Captures the actual DOM produced by the React preview. This gives the HTML
 * mode a faithful source instead of trying to convert JSX with regular
 * expressions (which breaks on maps, expressions, components and hooks).
 */
function RenderedMarkupCapture({
                                 block,
                                 onMarkup,
                               }: {
  block: Block;
  onMarkup: (markup: string) => void;
}) {
  const captureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = captureRef.current;
    if (!element) return;

    const updateMarkup = () => onMarkup(element.innerHTML);
    updateMarkup();

    const observer = new MutationObserver(updateMarkup);
    observer.observe(element, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [block.id, block.code, onMarkup]);

  return (
    <div
      ref={captureRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      }}
    >
      <RealBlockPreview block={block}/>
    </div>
  );
}

export function InlineBlock({block}: { block: Block }) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [language, setLanguage] = useState<CodeLanguage>('react');
  const [reactCode, setReactCode] = useState(block.code);
  const [htmlMarkup, setHtmlMarkup] = useState('');
  const [htmlWasEdited, setHtmlWasEdited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const [formatError, setFormatError] = useState<string | null>(null);

  useEffect(() => {
    setReactCode(block.code);
    setHtmlMarkup('');
    setHtmlWasEdited(false);
    setCopied(false);
    setFormatError(null);
  }, [block.id, block.code]);

  const editableBlock = {...block, code: reactCode};
  const codeToDisplay = language === 'react' ? reactCode : htmlMarkup;
  const copyCode = async () => {
    await navigator.clipboard?.writeText(codeToDisplay || block.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const handleMarkup = useCallback((markup: string) => {
    setHtmlMarkup(current => htmlWasEdited ? current : markup);
  }, [htmlWasEdited]);

  const handleLanguageChange = (nextLanguage: CodeLanguage) => {
    setLanguage(nextLanguage);
    setCopied(false);
  };

  const handleCodeChange = (value: string) => {
    if (language === 'react') {
      setReactCode(value);
    } else {
      setHtmlMarkup(value);
      setHtmlWasEdited(true);
    }
    setCopied(false);
    setFormatError(null);
  };

  const formatCurrentCode = async () => {
    const source = codeToDisplay || (language === 'react' ? block.code : '');
    if (!source || isFormatting) return;

    setIsFormatting(true);
    setFormatError(null);
    try {
      const formatted = await formatSourceCode(source, language);
      handleCodeChange(formatted.trimEnd());
    } catch (error) {
      // Code invalide (parenthèse manquante, JSX non fermé pendant la
      // frappe, etc.) — Prettier refuse de formater, on laisse le code
      // tel quel et on signale l'erreur au lieu de planter l'éditeur.
      const message = error instanceof Error ? error.message : String(error);
      setFormatError(message);
      console.error('Prettier formatting failed:', error);
    } finally {
      setIsFormatting(false);
    }
  };

  return <article className="inline-block" data-testid={`inline-block-${block.id}`}>
    {language === 'html' && (
      <RenderedMarkupCapture block={editableBlock} onMarkup={handleMarkup}/>
    )}
    <div className="inline-block-head">
      <div><span className="label">{block.category}</span>
        <h2>{block.name === 'Bento feature grid' ? 'With product screenshot' : block.name}</h2></div>
      <div className="inline-tools">
        <div className="tool-tabs">
          <button className={tab === 'preview' ? 'active' : ''} onClick={() => setTab('preview')}
                  data-testid={`button-preview-${block.id}`}> Aperçu
          </button>
          <button className={tab === 'code' ? 'active' : ''} onClick={() => setTab('code')}
                  data-testid={`button-code-${block.id}`}><Code2 size={13}/> Code source
          </button>
        </div>
        <div className="device-tabs">
          <button className={device === 'desktop' ? 'active' : ''} onClick={() => setDevice('desktop')}
                  title="Aperçu Desktop — 100%"
                  data-testid={`button-desktop-${block.id}`}><Monitor size={13}/></button>
          <button className={device === 'mobile' ? 'active' : ''} onClick={() => setDevice('mobile')}
                  title="Aperçu Mobile — 375px"
                  data-testid={`button-mobile-${block.id}`}> <Smartphone size={13}/> </button>
        </div>
        {tab === 'preview' && (
          <button className="quick-copy" onClick={copyCode} title={copied ? 'Code copié !' : 'Copier le code'}
                  data-testid={`button-copy-${block.id}`}>{copied ? <Check size={13}/> : <Copy
            size={13}/>}</button>
        )}
      </div>
    </div>
    {tab === 'preview' ? <div className={`inline-preview ${device}`}>
        {language === 'html' && htmlMarkup ? (
          <div className="html-live-preview" dangerouslySetInnerHTML={{__html: htmlMarkup}}/>
        ) : (
          <RealBlockPreview block={editableBlock}/>
        )}
      </div> :
      <div className="inline-code">
        <CodeEditor
          blockId={block.id}
          language={language}
          value={codeToDisplay || 'Génération du HTML…'}
          onChange={handleCodeChange}
          onFormat={formatCurrentCode}
          isFormatting={isFormatting}
          formatError={formatError}
          onCopy={copyCode}
          copied={copied}
          onLanguageChange={handleLanguageChange}
        />
      </div>}
    <div className="inline-block-foot"><span><Check size={13}/> Responsive component</span><span>Tailwind CSS · React · Accessible HTML</span>
    </div>
  </article>;
}