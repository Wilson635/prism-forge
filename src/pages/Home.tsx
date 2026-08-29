import {ArrowUpRight, Check, Code2, Copy, Grid2X2, Layers3, Sparkles, Zap} from 'lucide-react';
import {Link} from 'wouter';
import {blocks, kits, templates} from '@/data/data';
import {Logo, Nav} from '@/components/Brand';
import {MiniPreview} from '@/components/Previews';
import {SectionIntro} from '@/components/SectionIntro';

export function Home() {
    return <><Nav/>
        <main>
            <section className="hero page-grid">
                <div className="hero-copy">
                    <div className="eyebrow reveal"><span className="eyebrow-dot"/> The frontend archive for people who
                        care
                    </div>
                    <h1 className="reveal delay-1">Build the next<br/><em>great interface.</em></h1><p
                    className="hero-sub reveal delay-2">Carefully crafted templates, UI blocks, and component kits for
                    ambitious developers. Less time wrestling with pixels. More time making something people
                    remember.</p>
                    <div className="hero-actions reveal delay-3"><Link href="/blocks" className="button button-large"
                                                                       data-testid="button-browse-library">Browse the
                        library <ArrowUpRight size={17}/></Link><Link href="/templates" className="ghost-button"
                                                                      data-testid="link-see-templates">See
                        templates <span>↗</span></Link></div>
                    <div className="hero-proof reveal delay-3">
                        <div className="avatar-stack"><span>A</span><span>J</span><span>M</span><span>+</span></div>
                        <span>Trusted by <b>2,400+</b> builders</span></div>
                </div>
                <div className="hero-art reveal delay-2">
                    <div className="hero-orb"/>
                    <div className="hero-window">
                        <div className="window-bar"><span/><span/><span/><label>prism / showcase</label></div>
                        <div className="window-body">
                            <div className="tiny-nav"><b>PRISM</b><span/><span/><span/></div>
                            <div className="art-head">Ideas,<br/><strong>in focus.</strong></div>
                            <div className="art-sub"/>
                            <div className="art-btn"/>
                            <div className="art-layout">
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </div>
                    </div>
                    <div className="float-tag tag-one"><Code2 size={13}/> built with care</div>
                    <div className="float-tag tag-two"><span className="pulse-dot"/> 48 components</div>
                </div>
            </section>
            <section className="trust-strip"><span>Made for modern stacks</span>
                <div><b>React</b><b>Tailwind CSS</b><b>Next.js</b><b>Framer</b><b>Astro</b></div>
            </section>
            <section className="section page-grid categories"><SectionIntro eyebrow="The library"
                                                                            title="Everything you need to ship beautifully."><Link
                href="/blocks" className="text-link" data-testid="link-library">Explore all resources <ArrowUpRight
                size={14}/></Link></SectionIntro>
                <div
                    className="category-grid">{[['UI Blocks', '120+', 'Compositions that click', 'mint', Grid2X2], ['Templates', '24', 'A head start with taste', 'purple', Layers3], ['Component Kits', '06', 'Systems, not snippets', 'orange', Zap]].map(([name, count, desc, tone, Icon], i) =>
                    <Link href={i === 0 ? '/blocks' : i === 1 ? '/templates' : '/kits'}
                          className={`category-card ${tone}`} key={name as string} data-testid={`card-category-${i}`}>
                        <div className="category-top"><span className="category-icon">{Icon && <Icon size={19}/>}</span><span
                            className="category-count">{count as string}</span></div>
                        <h3>{name as string}</h3><p>{desc as string}</p><ArrowUpRight className="card-arrow" size={19}/></Link>)}</div>
            </section>
            <section className="section dark-section">
                <div className="page-grid"><SectionIntro eyebrow="The good stuff"
                                                         title="Small pieces.<br />Big possibilities."><span
                    className="section-note">Designed to be mixed, matched,<br/>and made yours.</span></SectionIntro>
                    <div className="block-showcase">{blocks.slice(0, 4).map((b, i) => <div
                        className={`showcase-card card-${i}`} key={b.id}>
                        <div className="showcase-meta"><span>{b.category}</span>
                            <button aria-label={`Copy ${b.name}`} data-testid={`button-copy-${b.id}`}><Copy size={14}/>
                            </button>
                        </div>
                        <MiniPreview tone={b.tone}/><h3>{b.name}</h3><p>Responsive, accessible, ready to ship.</p>
                    </div>)}</div>
                    <div className="center-action"><Link href="/blocks" className="outline-button"
                                                         data-testid="button-view-all-blocks">View all
                        blocks <ArrowUpRight size={15}/></Link></div>
                </div>
            </section>
            <section className="section templates-section page-grid"><SectionIntro eyebrow="Made to move"
                                                                                   title="Templates with a point of view."><Link
                href="/templates" className="text-link" data-testid="link-all-templates">See all templates <ArrowUpRight
                size={14}/></Link></SectionIntro>
                <div className="template-grid">{templates.map((t, i) => <Link href="/templates"
                                                                              className={`template-card t-${i}`}
                                                                              key={t.title}
                                                                              data-testid={`card-template-${i}`}>
                    <div className="template-image"><img src={t.image} alt={`${t.title} preview`}/><span
                        className="price">{t.price}</span></div>
                    <div className="template-info">
                        <div><span className="label">{t.tag}</span><h3>{t.title}</h3><p>{t.desc}</p></div>
                        <ArrowUpRight size={18}/></div>
                </Link>)}</div>
            </section>
            <section className="section kits-section page-grid">
                <div className="kits-head">
                    <div><span className="eyebrow">Curated kits</span><h2>One good decision<br/><em>after another.</em>
                    </h2></div>
                    <p>Skip the blank canvas. Kits bring an entire visual language into focus, so every screen feels
                        like it belongs.</p></div>
                <div className="kit-grid">{kits.map((k, i) => <Link href="/kits" key={k.name}
                                                                    className={`kit-card ${k.tone}`}
                                                                    data-testid={`card-kit-${i}`}>
                    <div className="kit-glow"/>
                    <div className="kit-content"><span className="label">{k.count}</span><h3>{k.name}</h3><p>{k.sub}</p>
                        <div className="kit-items">{k.items.map(x => <span key={x}><Check size={13}/>{x}</span>)}</div>
                        <span className="kit-link">Explore kit <ArrowUpRight size={15}/></span></div>
                    <div className="kit-preview"><MiniPreview tone={i ? 'violet' : 'mint'}
                                                              type="dashboard"/><MiniPreview tone={i ? 'blue' : 'amber'}
                                                                                             type="browser"/></div>
                </Link>)}</div>
            </section>
            <section id="pricing" className="access-band">
                <div><span className="eyebrow">Start building</span><h2>Your best work is<br/><em>closer than you
                    think.</em></h2></div>
                <div className="access-right"><p>One library. Unlimited ideas.<br/>Join PRISM and make the next one
                    count.</p><Link href="/kits" className="button button-large" data-testid="button-start-building">Get
                    full access <ArrowUpRight size={17}/></Link></div>
            </section>
        </main>
        <Footer/></>;
}

export function Footer() {
    return <footer className="footer page-grid">
        <div className="footer-top">
            <div><Logo/><p>The frontend archive<br/>for people who care.</p></div>
            <div className="footer-links">
                <div><span>Explore</span><Link href="/blocks">UI Blocks</Link><Link
                    href="/templates">Templates</Link><Link href="/kits">Kits</Link></div>
                <div><span>Resources</span><a href="#pricing">Pricing</a><a href="#pricing">Changelog</a><a
                    href="#pricing">License</a></div>
                <div><span>Say hello</span><a href="mailto:hello@prism.tools">Email us</a><a href="#pricing">Twitter /
                    X</a><a href="#pricing">GitHub</a></div>
            </div>
        </div>
        <div className="footer-bottom"><span>© 2026 PRISM Studio</span><span>Built with intention <Sparkles size={13}/></span>
        </div>
    </footer>;
}