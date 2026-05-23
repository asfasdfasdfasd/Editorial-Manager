import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
    label: string;
    href?: string;
    subItems?: { label: string; href: string }[];
    align?: 'left' | 'right';
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About Journal',
        subItems: [
            { label: 'Journal Information', href: '/about-journal/information' },
            { label: 'Aim & scope', href: '/about-journal/aim-scope' },
            { label: 'Call for paper', href: '/about-journal/call-for-paper' }
        ]
    },
    {
        label: 'Editorial Board',
        subItems: [
            { label: 'Editorial Board Member', href: '/editorial-board/members' },
            { label: 'Editor login', href: '/editorial-board/login' }
        ]
    },
    {
        label: 'Articles',
        subItems: [
            { label: 'Current Issue', href: '/articles/current-issue' },
            { label: 'Archive', href: '/articles/archive' }
        ]
    },
    {
        label: 'For authors',
        subItems: [
            { label: 'Publication Policy', href: '/for-authors/publication-policy' },
            { label: 'Open Access policy', href: '/for-authors/open-access-policy' },
            { label: 'Publication ethics', href: '/for-authors/publication-ethics' },
            { label: 'Instructions for authors', href: '/for-authors/instructions' },
            { label: 'Publication charges', href: '/for-authors/charges' }
        ]
    },
    { label: 'Submit manuscript', href: '/submit-manuscript' },
    { label: 'Journal policy', href: '/journal-policy' },
    {
        label: 'Reviewer',
        subItems: [
            { label: 'Reviewer instruction', href: '/reviewer/instructions' },
            { label: 'Join as reviewer', href: '/reviewer/join' },
            { label: 'Reviewer login', href: '/reviewer/login' }
        ],
        align: 'right'
    }
];

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

    const toggleMobileSubmenu = (label: string) => {
        if (expandedMobileItem === label) {
            setExpandedMobileItem(null);
        } else {
            setExpandedMobileItem(label);
        }
    };

    return (
        <header className="w-full flex flex-col shadow-sm relative z-50">
            {/* Top Bar */}
            <div className="bg-slate-900 text-white px-4 md:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Brand Logo Section  */}
                <div className="flex items-center gap-3">
                    <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm shadow-inner text-white">
                        S
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold tracking-wide">SVIET</h1>
                </div>

                {/* Modernized Auth Section */}
                <div className="flex items-center gap-3 text-sm font-medium">
                    <Link
                        to="/login"
                        className="text-slate-300 hover:text-white hover:bg-slate-800/60 px-3 py-1.5 rounded-md transition-all duration-200"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md transition-all duration-200 shadow-sm"
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="bg-white border-b border-gray-200 px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-wrap gap-1 lg:gap-3 text-sm font-medium text-slate-700">
                        {navItems.map((item) => {
                            if (item.subItems) {
                                const dropdownAlignClass = item.align === 'right' ? 'right-0' : 'left-0';
                                return (
                                    <div key={item.label} className="relative group py-4 px-2.5 flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
                                        <span className="select-none">{item.label}</span>
                                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>

                                        {/* Dropdown Menu */}
                                        <div className={`absolute top-full ${dropdownAlignClass} pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0`}>
                                            <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-1.5 ring-1 ring-black/5 overflow-hidden">
                                                {item.subItems.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        to={sub.href}
                                                        className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium border-l-2 border-transparent hover:border-blue-600"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.href || '#'}
                                        className="py-4 px-2.5 hover:text-blue-600 transition-colors flex items-center"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }
                        })}
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <div className="flex md:hidden items-center justify-between w-full py-3">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Journal Navigation</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden bg-slate-50 border-b border-gray-200 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col px-4 gap-1">
                    {navItems.map((item) => {
                        if (item.subItems) {
                            const isExpanded = expandedMobileItem === item.label;
                            return (
                                <div key={item.label} className="border-b border-slate-100 py-1">
                                    <button
                                        onClick={() => toggleMobileSubmenu(item.label)}
                                        className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors text-left focus:outline-none"
                                    >
                                        <span>{item.label}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-300 text-slate-400 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`pl-4 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-60 py-1 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                to={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-2 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors border-l border-slate-200 pl-3"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={item.label}
                                    to={item.href || '#'}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors border-b border-slate-100"
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;