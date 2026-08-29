import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Logo() {
    return (
        <Link href="/" className="logo" data-testid="link-logo">
            <span className="logo-mark">
                <i />
                <i />
                <i />
            </span>
            <span>PRISM</span>
        </Link>
    );
}

export function Nav() {
    const [open, setOpen] = useState(false);
    const [location] = useLocation();

    return (
        <header className="nav-wrap">
            <nav className="nav">
                <Logo />
                <div className={`nav-links ${open ? 'open' : ''}`}>
                    <Link
                        href="/"
                        className={location === '/' ? 'active' : ''}
                        data-testid="link-blocks"
                    >
                        Home
                    </Link>
                    <Link
                        href="/blocks"
                        className={location === '/blocks' ? 'active' : ''}
                        data-testid="link-blocks"
                    >
                        Blocks
                    </Link>
                    <Link
                        href="/templates"
                        className={location === '/templates' ? 'active' : ''}
                        data-testid="link-templates"
                    >
                        Templates
                    </Link>
                    <Link
                        href="/kits"
                        className={location === '/kits' ? 'active' : ''}
                        data-testid="link-kits"
                    >
                        Kits <span className="new-pill">new</span>
                    </Link>
                    <a href="#pricing" data-testid="link-pricing">
                        Pricing
                    </a>
                    <Link
                        href="/blocks"
                        className="mobile-cta"
                        data-testid="link-mobile-access"
                    >
                        Get access <ArrowUpRight size={14} />
                    </Link>
                </div>
                <div className="nav-actions">
                    <Link
                        href="/blocks"
                        className="text-link desktop-only"
                        data-testid="link-explore"
                    >
                        Explore <ArrowUpRight size={14} />
                    </Link>
                    <Link
                        href="/kits"
                        className="button button-small desktop-only"
                        data-testid="button-get-access"
                    >
                        Get access <ArrowUpRight size={14} />
                    </Link>
                    <button
                        className="menu-btn"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                        data-testid="button-menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export function NavBlock() {
    const [open, setOpen] = useState(false);
    const [location] = useLocation();

    return (
        <header className="nav-wrap">
            <nav className="nav">
                <p></p>
                <div className={`nav-links ${open ? 'open' : ''}`}>
                    <Link
                        href="/"
                        className={location === '/' ? 'active' : ''}
                        data-testid="link-blocks"
                    >
                        Home
                    </Link>
                    <Link
                        href="/blocks"
                        className={location === '/blocks' ? 'active' : ''}
                        data-testid="link-blocks"
                    >
                        Blocks
                    </Link>
                    <Link
                        href="/templates"
                        className={location === '/templates' ? 'active' : ''}
                        data-testid="link-templates"
                    >
                        Templates
                    </Link>
                    <Link
                        href="/kits"
                        className={location === '/kits' ? 'active' : ''}
                        data-testid="link-kits"
                    >
                        Kits <span className="new-pill">new</span>
                    </Link>
                    <a href="#pricing" data-testid="link-pricing">
                        Pricing
                    </a>
                    <Link
                        href="/blocks"
                        className="mobile-cta"
                        data-testid="link-mobile-access"
                    >
                        Get access <ArrowUpRight size={14} />
                    </Link>
                </div>
                <div className="nav-actions">
                    <Link
                        href="/blocks"
                        className="text-link desktop-only"
                        data-testid="link-explore"
                    >
                        Explore <ArrowUpRight size={14} />
                    </Link>
                    <Link
                        href="/kits"
                        className="button button-small desktop-only"
                        data-testid="button-get-access"
                    >
                        Get access <ArrowUpRight size={14} />
                    </Link>
                    <button
                        className="menu-btn"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                        data-testid="button-menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
        </header>
    );
}