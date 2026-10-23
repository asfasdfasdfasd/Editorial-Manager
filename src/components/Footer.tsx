import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-slate-900 text-white relative">
            {/* Top Matching Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600"></div>

            {/* Main Branding Section */}
            <div className="py-10 px-4 text-center max-w-4xl mx-auto flex flex-col items-center space-y-4">
                {/* Logo with clean white circular background and subtle glow */}
                <div className="h-20 w-20 rounded-full border-2 border-slate-700 bg-white flex items-center justify-center shadow-lg overflow-hidden p-1 ring-4 ring-blue-600/20">
                    <img src="/logo.png" alt="JAPHSER Logo" className="h-full w-full object-contain" />
                </div>

                {/* Journal Title & Information */}
                <div className="space-y-2 max-w-2xl">
                    <h2 className="text-white font-extrabold text-lg md:text-2xl tracking-tight leading-snug">
                        Journal of Advanced Pharmaceutical and Health Sciences Education and Research
                    </h2>
                    <p className="text-blue-400 font-semibold text-xs md:text-sm tracking-wide uppercase">
                        (JAPHSER) &bull; ISSN: XXXX-XXXX
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm font-medium">
                        Published by{' '}
                        <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">
                            Pharmacy Research Group, Swami Vivekanand College of Pharmacy (SVCP)
                        </span>
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
