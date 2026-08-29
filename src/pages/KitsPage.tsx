import {ArrowUpRight} from 'lucide-react';
import {Link} from 'wouter';
import {kits} from '@/data/data';
import {Nav} from '@/components/Brand';
import {MiniPreview} from '@/components/Previews';
import {Footer} from './Home';

export function KitsPage() {
    const allKits = kits.concat([{
        name: 'Signal Commerce',
        sub: 'Make buying feel effortless.',
        count: '56 blocks',
        tone: 'orange',
        items: ['Product discovery', 'Cart experiences', 'Checkout flows']
    }]);
    return <><Nav/>
        <main className="page-grid kits-page">
            <div className="kits-hero">
                <div><span className="eyebrow">Beyond the component</span><h1>Systems for<br/><em>the long run.</em>
                </h1></div>
                <p>When a collection of components becomes a language, your product starts to speak with one voice.</p>
            </div>
            <div className="kit-list">{allKits.map((k, i) => <Link href="/blocks" className={`big-kit ${k.tone}`}
                                                                   key={k.name} data-testid={`card-featured-kit-${i}`}>
                <div className="big-kit-copy"><span className="label">{k.count} / curated</span><h2>{k.name}</h2>
                    <p>{k.sub}</p><span className="button button-small">Explore kit <ArrowUpRight size={14}/></span>
                </div>
                <div className="big-kit-collage"><MiniPreview tone={i === 1 ? 'violet' : 'mint'}
                                                              type="dashboard"/><MiniPreview tone="blue"/><MiniPreview
                    tone="amber"/></div>
            </Link>)}</div>
        </main>
        <Footer/></>;
}