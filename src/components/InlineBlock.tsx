import {useCallback, useEffect, useRef, useState} from 'react';
import type {PointerEvent as ReactPointerEvent, ReactNode} from 'react';
import {Check, Code2, Columns2, Copy, Eye, Laptop, Monitor, Smartphone, Tablet} from 'lucide-react';
import {createHighlighter} from 'shiki/bundle/web';
import type {Highlighter} from 'shiki/bundle/web';
import type {Block} from '@/catalog';
import {RealBlockPreview} from './Previews';

type CodeLanguage = 'react' | 'html';
type WorkspaceTab = 'preview' | 'code' | 'split';

const VIEWPORTS = [
  {id: 'phone', label: '390', width: 390, icon: Smartphone},
  {id: 'tablet', label: '768', width: 768, icon: Tablet},
  {id: 'laptop', label: '1024', width: 1024, icon: Laptop},
  {id: 'desktop', label: '1280', width: 1280, icon: Monitor},
  {id: 'fluid', label: 'Fluid', width: null as number | null, icon: Columns2},
] as const;

const MIN_PREVIEW_WIDTH = 320;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

const highlightCache = new Map<string, string>();
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  highlighterPromise ??= createHighlighter({
    langs: ['tsx', 'html'],
    themes: ['github-dark'],
  });
  return highlighterPromise;
}

async function highlightSource(source: string, language: CodeLanguage) {
  const key = `${language}:${source}`;
  const cached = highlightCache.get(key);
  if (cached) return cached;

  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(source, {
    lang: language === 'react' ? 'tsx' : 'html',
    theme: 'github-dark',
  });
  highlightCache.set(key, html);
  return html;
}

function CodeViewer({
  blockId,
  language,
  value,
  onCopy,
  copied,
  onLanguageChange,
}: {
  blockId: string;
  language: CodeLanguage;
  value: string;
  onCopy: () => void;
  copied: boolean;
  onLanguageChange: (language: CodeLanguage) => void;
}) {
  const [highlighted, setHighlighted] = useState('');
  const lineCount = Math.max(1, value.split('\n').length);

  useEffect(() => {
    if (!value) {
      setHighlighted('');
      return;
    }
    let cancelled = false;
    highlightSource(value, language).then((html) => {
      if (!cancelled) setHighlighted(html);
    });
    return () => {
      cancelled = true;
    };
  }, [language, value]);

  return (
    <div className="playground-editor" data-testid={`code-editor-${blockId}`}>
      <div className="playground-editor-bar">
        <div className="playground-lang" role="tablist">
          <button
            role="tab"
            aria-selected={language === 'react'}
            className={language === 'react' ? 'is-active' : ''}
            onClick={() => onLanguageChange('react')}
            data-testid={`button-editor-react-${blockId}`}
          >
            TSX
          </button>
          <button
            role="tab"
            aria-selected={language === 'html'}
            className={language === 'html' ? 'is-active' : ''}
            onClick={() => onLanguageChange('html')}
            data-testid={`button-editor-html-${blockId}`}
          >
            HTML
          </button>
        </div>
        <span className="playground-readonly">Read only</span>
        <div className="playground-editor-actions">
          <button onClick={onCopy} data-testid={`button-editor-copy-${blockId}`}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <div
        className="playground-code"
        tabIndex={0}
        aria-label={`${language === 'react' ? 'React TSX' : 'HTML'} source`}
        dangerouslySetInnerHTML={{
          __html: highlighted || `<pre><code>${escapeHtml(value || 'Generating HTML…')}</code></pre>`,
        }}
      />
      <div className="playground-editor-foot">
        <span>{language === 'react' ? 'React + Tailwind' : 'Rendered markup'}</span>
        <span>{lineCount} lines</span>
      </div>
    </div>
  );
}

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
  }, [block.id, onMarkup]);

  return (
    <div ref={captureRef} className="playground-html-capture" aria-hidden="true">
      <RealBlockPreview block={block} />
    </div>
  );
}

function ResizablePreview({
  blockId,
  children,
}: {
  blockId: string;
  children: ReactNode;
}) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [viewerWidth, setViewerWidth] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const update = () => setViewerWidth(Math.max(MIN_PREVIEW_WIDTH, Math.floor(viewer.clientWidth)));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewer);
    return () => observer.disconnect();
  }, []);

  const appliedWidth =
    width === null || viewerWidth === 0
      ? viewerWidth
      : Math.min(Math.max(width, MIN_PREVIEW_WIDTH), viewerWidth);

  const startDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const frame = event.currentTarget.parentElement;
    if (!frame) return;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    const left = frame.getBoundingClientRect().left;

    const onMove = (ev: PointerEvent) => {
      const next = Math.round(ev.clientX - left);
      setWidth(Math.min(Math.max(next, MIN_PREVIEW_WIDTH), viewerRef.current?.clientWidth ?? next));
    };
    const onUp = () => {
      setDragging(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  return (
    <div className="playground-stage-wrap">
      <div className="playground-ruler">
        <div className="playground-presets">
          {VIEWPORTS.map((preset) => {
            const Icon = preset.icon;
            const active = preset.width === null ? width === null : width === preset.width;
            return (
              <button
                key={preset.id}
                className={active ? 'is-active' : ''}
                onClick={() => setWidth(preset.width)}
                title={preset.width ? `${preset.label}px` : 'Full width'}
                data-testid={`button-viewport-${preset.id}-${blockId}`}
              >
                <Icon size={13} />
                {preset.label}
              </button>
            );
          })}
        </div>
        <span className="playground-width">{appliedWidth || viewerWidth}px</span>
      </div>

      <div ref={viewerRef} className={`playground-viewer${dragging ? ' is-dragging' : ''}`}>
        <div className="playground-viewport" style={{width: appliedWidth || '100%'}}>
          {children}
          <button
            type="button"
            className="playground-resize"
            aria-label="Resize preview"
            onPointerDown={startDrag}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}

export function InlineBlock({block}: {block: Block}) {
  const [tab, setTab] = useState<WorkspaceTab>('preview');
  const [language, setLanguage] = useState<CodeLanguage>('react');
  const [htmlMarkup, setHtmlMarkup] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setHtmlMarkup('');
    setCopied(false);
    setLanguage('react');
  }, [block.id]);

  const showPreview = tab === 'preview' || tab === 'split';
  const showCode = tab === 'code' || tab === 'split';
  const source = language === 'react' ? block.code : htmlMarkup;

  const copyCode = async () => {
    await navigator.clipboard?.writeText(source || block.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const handleMarkup = useCallback((markup: string) => {
    setHtmlMarkup(markup);
  }, []);

  return (
    <article className="playground" data-testid={`inline-block-${block.id}`}>
      {language === 'html' && <RenderedMarkupCapture block={block} onMarkup={handleMarkup} />}

      <header className="playground-head">
        <div>
          <span className="playground-kicker">{block.category}</span>
          <h2>{block.name === 'Bento feature grid' ? 'With product screenshot' : block.name}</h2>
        </div>
        <div className="playground-tools">
          <div className="playground-tabs" role="tablist">
            <button
              className={tab === 'preview' ? 'is-active' : ''}
              onClick={() => setTab('preview')}
              data-testid={`button-preview-${block.id}`}
            >
              <Eye size={13} /> Preview
            </button>
            <button
              className={tab === 'code' ? 'is-active' : ''}
              onClick={() => setTab('code')}
              data-testid={`button-code-${block.id}`}
            >
              <Code2 size={13} /> Code
            </button>
            <button
              className={tab === 'split' ? 'is-active' : ''}
              onClick={() => setTab('split')}
              data-testid={`button-split-${block.id}`}
            >
              <Columns2 size={13} /> Split
            </button>
          </div>
          <button className="playground-copy" onClick={copyCode} data-testid={`button-copy-${block.id}`}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </header>

      {showPreview && (
        <ResizablePreview blockId={block.id}>
          <RealBlockPreview block={block} />
        </ResizablePreview>
      )}

      {showCode && (
        <CodeViewer
          blockId={block.id}
          language={language}
          value={source || (language === 'html' ? 'Generating HTML…' : block.code)}
          onCopy={copyCode}
          copied={copied}
          onLanguageChange={(next) => {
            setLanguage(next);
            setCopied(false);
          }}
        />
      )}
    </article>
  );
}
