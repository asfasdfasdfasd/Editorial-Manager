import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const footerLinks = [
        "Instructions for Authors",
        "Reviewer Guidelines",
        "About the Journal",
        "Language Editing Services",
        "Contact Editorial Office",
        "Frequently Asked Questions"
    ];

    return (
        <footer className="mt-12 mb-8 px-4 w-full max-w-6xl mx-auto">
            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-slate-300 rounded-lg overflow-hidden border border-slate-300 gap-px">
                {footerLinks.map((link, idx) => (
                    <Link
                        key={idx}
                        to="#"
                        className="bg-slate-200 flex items-center justify-center text-center p-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-700 transition-colors h-full w-full"
                    >
                        {link}
                    </Link>
                ))}
            </div>

            {/* Informational Text */}
            <div className="mt-6 text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    <strong>First-time users:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur.
                </p>
                <p>
                    <strong>Repeat users:</strong> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
                </p>
            </div>
        </footer>
    );
};

export default Footer;