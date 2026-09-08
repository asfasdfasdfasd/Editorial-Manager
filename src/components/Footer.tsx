import {
    FaFacebookF,
    FaXTwitter,
    FaEnvelope,
    FaShareNodes,
    FaWhatsapp,
    FaRedditAlien,
    FaLinkedinIn
} from 'react-icons/fa6';

import { PiMicrosoftOutlookLogoLight } from "react-icons/pi";

const Footer = () => {
    const socialShares = [
        { icon: <FaFacebookF size={18} />, color: 'bg-[#4267B2]', label: 'Facebook' },
        { icon: <FaXTwitter size={18} />, color: 'bg-black', label: 'X' },
        { icon: <FaEnvelope size={18} />, color: 'bg-[#7f8c8d]', label: 'Email' },
        { icon: <FaShareNodes size={18} />, color: 'bg-[#8dc63f]', label: 'Share' },
        { icon: <PiMicrosoftOutlookLogoLight size={18} />, color: 'bg-[#0078d4]', label: 'Outlook' },
        { icon: <FaWhatsapp size={18} />, color: 'bg-[#25D366]', label: 'WhatsApp' },
        { icon: <FaRedditAlien size={18} />, color: 'bg-[#FF4500]', label: 'Reddit' },
        { icon: <FaLinkedinIn size={18} />, color: 'bg-[#0077B5]', label: 'LinkedIn' },
    ];

    return (
        <footer className="w-full bg-slate-50 border-t border-slate-200">
            <div className="py-8 px-4 text-center max-w-3xl mx-auto flex flex-col items-center space-y-3">
                <div className="h-16 w-16 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-xs overflow-hidden">
                    <img src="/logo.png" alt="JAPHSER Logo" className="h-14 w-14 object-contain" />
                </div>
                <div className="space-y-1.5">
                    <h2 className="text-slate-900 font-bold text-base md:text-lg tracking-tight leading-snug">
                        Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER)
                    </h2>
                    <p className="text-slate-600 text-xs md:text-sm font-medium">
                        Published by{' '}
                        <span className="font-semibold text-slate-800">Pharmacy Research Group, Swami Vivekanand College of Pharmacy (SVCP)</span>
                    </p>
                    <p className="text-slate-500 text-xs">
                        ©2026 JAPHSER. Open-access, peer-reviewed academic journal.
                    </p>
                </div>
            </div>

            {/* Middle Section: Full Width Color Strip Tabs  */}
            <div className="w-full grid grid-cols-4 sm:grid-cols-8 shadow-inner">
                {socialShares.map((tab, idx) => (
                    <button
                        key={idx}
                        aria-label={`Share on ${tab.label}`}
                        className={`${tab.color} text-white py-3.5 flex items-center justify-center transition-all duration-200 hover:brightness-110 hover:-translate-y-[2px] active:translate-y-0 focus:outline-none`}
                    >
                        {tab.icon}
                    </button>
                ))}
            </div>

            <div className="w-full bg-[#801a1a] text-white py-4 px-4 text-center border-t border-red-950/20">
                <p className="text-xs md:text-sm font-light tracking-wider opacity-90">
                    Copyright ©2026 Innovative Publication <span className="mx-1.5 opacity-40">|</span> By :{' '}
                    <a
                        href="https://www.ipinnovative.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline tracking-normal"
                    >
                        www.ipinnovative.com
                    </a>
                    {" "}All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;