import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaLock } from 'react-icons/fa6';

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
    {
        label: 'Journal policy',
        subItems: [
            { label: 'Journal Editorial Policy', href: '/policies/editorial' },
            { label: 'Peer Review Policy', href: '/policies/review' },
            { label: 'Achieve Policy', href: '/policies/achieve' }
        ],
        align: 'right'
    },
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
        <header className="w-full flex flex-col shadow-sm relative z-50 bg-white">
            {/* Top Bar: Clean, academic brand header */}
            <div className="w-full px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-100">
                {/* Journal Branding Cluster */}
                <div className="flex items-center sm:items-start gap-5 text-center sm:text-left">
                    {/* Logo */}
                    <div className="h-20 w-20 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                        <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
                    </div>

                    {/* Text Stack */}
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                            Journal of Advanced Pharmaceutical and Health Sciences Education and Research
                        </h1>
                        <p className="text-sm text-slate-700 font-medium tracking-wide">
                            {/* E-ISSN: XXXX-XXXX <span className="mx-1 text-slate-300">|</span> */}

                            ISSN: XXXX-XXXX
                        </p>
                        <p className="text-sm text-slate-600">
                            Open-access, peer-reviewed academic journal on pharmaceutical sciences, health sciences and healthcare research
                        </p>
                    </div>
                </div>

                {/* Rightside Action Buttons */}
                <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
                    <Link
                        to="/signup"
                        className="text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-1.5"
                    >
                        <FaUserPlus className="opacity-80" />
                        Register
                    </Link>
                    <Link
                        to="/login"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-200 shadow-sm flex items-center gap-1.5"
                    >
                        <FaLock className="text-[10px]" />
                        Login
                    </Link>
                </div>
            </div>

            {/* Bottom Navigation Bar: Full-width container */}
            <div className="w-full bg-slate-900 text-white border-b border-slate-950">
                {/* Center alignment wrapper across the grid layout width */}
                <div className="w-full flex items-center justify-between md:justify-center px-4 md:px-8">

                    {/* Desktop Navigation: Centered horizontal strip items */}
                    <nav className="hidden md:flex flex-wrap items-center justify-center text-xs lg:text-sm font-medium">
                        {navItems.map((item) => {
                            if (item.subItems) {
                                const dropdownAlignClass = item.align === 'right' ? 'right-0' : 'left-0';
                                return (
                                    <div key={item.label} className="relative group py-3.5 px-4 flex items-center gap-1.5 text-slate-200 cursor-pointer transition-colors hover:bg-white hover:text-slate-800">
                                        <span className="select-none">{item.label}</span>
                                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>

                                        {/* Dropdown Menu */}
                                        <div className={`absolute top-full ${dropdownAlignClass} pt-0 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-1 group-hover:translate-y-0 shadow-2xl`}>
                                            <div className="bg-white border border-slate-100 shadow-xl py-1 ring-1 ring-black/5 overflow-hidden">
                                                {item.subItems.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        to={sub.href}
                                                        className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium border-l-2 border-transparent hover:border-blue-600"
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
                                        className="py-3.5 px-4 text-slate-200 hover:bg-white hover:text-slate-800 transition-colors flex items-center"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }
                        })}
                    </nav>

                    {/* Mobile Hamburger Button Bar */}
                    <div className="flex md:hidden items-center justify-between w-full py-3">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Journal Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-1.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors focus:outline-none"
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
            <div className={`md:hidden bg-slate-950 text-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-125 opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col px-4 gap-1">
                    {navItems.map((item) => {
                        if (item.subItems) {
                            const isExpanded = expandedMobileItem === item.label;
                            return (
                                <div key={item.label} className="border-b border-slate-900 py-1">
                                    <button
                                        onClick={() => toggleMobileSubmenu(item.label)}
                                        className="w-full flex items-center justify-between py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors text-left focus:outline-none"
                                    >
                                        <span>{item.label}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-300 text-slate-500 ${isExpanded ? 'rotate-180 text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`pl-4 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-60 py-1 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                to={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-2 text-xs text-slate-400 hover:text-white transition-colors border-l border-slate-800 pl-3"
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
                                    className="block py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors border-b border-slate-900"
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