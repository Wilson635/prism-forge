import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, Grid2X2, Layers3, Search, Sparkles, SwatchBook } from 'lucide-react';
import { Link } from 'wouter';
import { blocks } from '@/catalog';
import type { Block } from '@/catalog';
import {Logo, NavBlock} from '@/components/Brand';
import { InlineBlock } from '@/components/InlineBlock';


type BlockId = (typeof blocks)[number]['id'];
type BlockCategory = Block['category'];

type Section = {
    name: string;
    categories: BlockCategory[];
};

type CategoryGroup = {
    name: string;
    icon: typeof Sparkles;
    defaultExpanded: boolean;
    sections: Section[];
};

const CATEGORY_GROUPS: CategoryGroup[] = [
    {
        name: 'Marketing',
        icon: SwatchBook,
        defaultExpanded: true,
        sections: [
            { name: 'Hero Sections', categories: ['Hero'] },
            { name: 'Feature Sections', categories: ['Features'] },
            { name: 'CTA Sections', categories: ['CTA'] },
            { name: 'Bento Grids', categories: ['Bento'] },
            { name: 'Pricing Sections', categories: ['Pricing'] },
            { name: 'Header Sections', categories: ['Header'] },
            { name: 'Newsletter Sections', categories: ['Newsletter'] },
            { name: 'Testimonials', categories: ['Testimonials'] },
            { name: 'Blog Sections', categories: ['Blog'] },
        ],
    },
    {
        name: 'Application UI',
        icon: Grid2X2,
        defaultExpanded: true,
        sections: [
            { name: 'Navbars', categories: ['Navbars'] },
            { name: 'Sidebars', categories: ['Sidebars'] },
            { name: 'Command Palettes', categories: ['Command Palettes'] },
            { name: 'Tables', categories: ['Tables'] },
            { name: 'Forms', categories: ['Forms'] },
        ],
    },
    {
        name: 'Ecommerce',
        icon: Layers3,
        defaultExpanded: true,
        sections: [
            { name: 'Product Overviews', categories: ['Product Overviews'] },
            { name: 'Product Lists', categories: ['Product Lists'] },
            { name: 'Shopping Carts', categories: ['Shopping Carts'] },
            { name: 'Checkout Forms', categories: ['Checkout Forms'] },
        ],
    },
];

// Flat "section name -> block ids" lookup, derived once from CATEGORY_GROUPS
// by matching each block's `category` field. Recomputing this instead of
// hand-listing ids means a brand-new block in the catalog is picked up
// automatically as soon as its `category` matches a section — nothing in
// this file needs to change.
const SECTION_BLOCK_IDS: Record<string, BlockId[]> = Object.fromEntries(
    CATEGORY_GROUPS.flatMap((group) =>
        group.sections.map((section) => [
            section.name,
            blocks.filter((block) => section.categories.includes(block.category)).map((block) => block.id),
        ]),
    ),
);

const DEFAULT_EXPANDED_GROUPS: Record<string, boolean> = Object.fromEntries(
    CATEGORY_GROUPS.map((group) => [group.name, group.defaultExpanded]),
);

// ---------------------------------------------------------------------------
// Filtering helper — kept outside the component so it's easy to test and
// reason about in isolation from React state.
// ---------------------------------------------------------------------------

function filterBlocks(activeSection: string, query: string) {
    const allowedIds = SECTION_BLOCK_IDS[activeSection] ?? blocks.map((block) => block.id);
    const normalizedQuery = query.toLowerCase();

    return blocks.filter(
        (block) => allowedIds.includes(block.id) && block.name.toLowerCase().includes(normalizedQuery),
    );
}

export function BlocksPage() {
    // ---- state ---------------------------------------------------------------
    const [activeCategory, setActiveCategory] = useState('Marketing');
    const [activeSection, setActiveSection] = useState('Feature Sections');
    const [query, setQuery] = useState('');
    const [expandedGroups, setExpandedGroups] =
        useState<Record<string, boolean>>(DEFAULT_EXPANDED_GROUPS);

    // ---- derived data ----------------------------------------------------------
    const filteredBlocks = useMemo(() => filterBlocks(activeSection, query), [activeSection, query]);

    // ---- handlers --------------------------------------------------------------
    const toggleGroup = (groupName: string) => {
        setActiveCategory(groupName);
        setExpandedGroups((current) => ({ ...current, [groupName]: !current[groupName] }));
    };

    const selectSection = (groupName: string, sectionName: string) => {
        setActiveCategory(groupName);
        setActiveSection(sectionName);
    };

    // ---- render ------------------------------------------------------------------
    return (
        <>
            <NavBlock />
            <main className="blocks-browser">
                <aside className="blocks-sidebar">
                    <div className="sidebar-brand">
                        <Link className="cursor-pointer" href="/"  data-testid="link-logo">
                            <Logo />
                        </Link>
                    </div>

                    <div className="sidebar-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <span className="sidebar-kicker">Library</span>

                        {CATEGORY_GROUPS.map((group) => {
                            const GroupIcon = group.icon;
                            const isExpanded = expandedGroups[group.name];

                            return (
                                <div className="sidebar-group" key={group.name}>
                                    <button
                                        onClick={() => toggleGroup(group.name)}
                                        className={`sidebar-parent ${activeCategory === group.name ? 'category-active' : ''}`}
                                        aria-expanded={isExpanded}
                                        data-testid={`button-category-${group.name.toLowerCase().replace(' ', '-')}`}
                                    >
                    <span>
                      <GroupIcon size={14} />
                        {group.name}
                    </span>
                                        <ChevronDown className={isExpanded ? 'chevron-open' : ''} size={13} />
                                    </button>

                                    {isExpanded &&
                                        group.sections.map((section) => (
                                            <button
                                                key={section.name}
                                                onClick={() => selectSection(group.name, section.name)}
                                                className={`sidebar-child ${activeSection === section.name ? 'selected' : ''}`}
                                                data-testid={`button-subcategory-${section.name.toLowerCase().replaceAll(' ', '-')}`}
                                            >
                                                {section.name}
                                                <span>{activeSection === section.name ? '●' : ''}</span>
                                            </button>
                                        ))}
                                </div>
                            );
                        })}
                    </div>

                    <div className="sidebar-promo">
                        <span className="eyebrow">PRISM+ access</span>
                        <strong>
                            Build less.
                            <br />
                            Make more.
                        </strong>
                        <Link href="/kits" data-testid="link-sidebar-kits">
                            Explore kits <ArrowUpRight size={13} />
                        </Link>
                    </div>
                </aside>

                <section className="blocks-main">
                    <div className="blocks-page-head">
                        <div>
                            <span className="eyebrow">UI Blocks / {activeCategory} / Page sections</span>
                            <h1>{activeSection}</h1>
                            <p>
                                Use these thoughtfully crafted examples to highlight the most important parts of
                                your product. Built with real-world layouts and ready to make your own.
                            </p>
                        </div>

                        <label className="browser-search">
                            <Search size={15} />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search blocks..."
                                data-testid="input-search-blocks"
                            />
                        </label>
                    </div>

                    <div className="inline-block-list">
                        {filteredBlocks.map((block) => (
                            <InlineBlock block={block} key={block.id} />
                        ))}
                    </div>

                    {filteredBlocks.length === 0 && (
                        <div className="empty-blocks">No blocks found. Try another search.</div>
                    )}
                </section>
            </main>
        </>
    );
}