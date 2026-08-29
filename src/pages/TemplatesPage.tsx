import {ArrowUpRight} from 'lucide-react';
import {Link} from 'wouter';
import previewOne from '@/assets/image_1784103674192.png';
import {templates} from '@/data/data';
import {Nav} from '@/components/Brand';
import {Footer} from './Home';

export function TemplatesPage() {
    const allTemplates = templates.concat([{
        title: 'Mono',
        desc: 'A focused home for your ideas.',
        tag: 'Portfolio / Personal',
        price: '$89',
        image: previewOne
    }]);
    return <><Nav/>
        <main className="page-grid templates-page">
            <div className="templates-hero"><span className="eyebrow">The template edit</span><h1>Start
                somewhere<br/><em>worth going.</em></h1><p>Not themes. Not shortcuts. Thoughtful foundations for
                products with something to say.</p></div>
            <div className="editorial-list">{allTemplates.map((t, i) => <Link href="/kits" className="editorial-card"
                                                                              key={t.title}
                                                                              data-testid={`card-editorial-template-${i}`}>
                <div className="editorial-copy"><span className="number">0{i + 1}</span><span
                    className="label">{t.tag}</span><h2>{t.title}</h2><p>{t.desc}</p><span
                    className="price-line">{t.price} <ArrowUpRight size={15}/></span></div>
                <div className="editorial-image"><img src={t.image} alt={`${t.title} template preview`}/></div>
            </Link>)}</div>
        </main>
        <Footer/></>;
}