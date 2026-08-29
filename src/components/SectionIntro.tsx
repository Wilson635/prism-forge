import type { ReactNode } from 'react';

export function SectionIntro({
                                 eyebrow,
                                 title,
                                 children,
                             }: {
    eyebrow: string;
    title: string;
    children?: ReactNode;
}) {
    return (
        <div className="section-intro">
            <div>
                <span className="eyebrow">{eyebrow}</span>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    );
}