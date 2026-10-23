import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    FaEnvelope,
    FaPhone,
    FaUserTie,
    FaBuilding,
    FaLocationDot,
    FaCheck
} from 'react-icons/fa6';

const keyFeatures = [
    'High Visibility',
    'Peer-Review',
    'Ethical Publishing Standards',
    'Fast-Track Processing',
    'Open Access',
    'Multidisciplinary Scope'
];

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 antialiased space-y-12">

                <section>

                    {/* Section Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-[3px] bg-slate-800 rounded-full"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                Contact Information
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Editorial Contact Details
                        </h2>
                        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                            Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER)
                        </p>
                    </div>
                </section>
                {/* Figure 1: Journal Banner Section */}
                <section className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm p-3 sm:p-4">
                    <img
                        src="/8d4977b9-f754-4b95-8695-4be37fcd13e6.png"
                        alt="Figure 1: Journal of Advanced Pharmaceutical and Health Sciences Education and Research Banner"
                        className="w-full h-auto max-h-[500px] object-contain rounded-lg sm:rounded-xl mx-auto block"
                    />

                </section>

                {/* Journal Overview Section: Figure 2 (Left) + Write-up (Right) (Chitkara JPTRM Style) */}
                <section className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

                        {/* Left Column: Figure 2 (A4 Size Template) */}
                        <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 mx-auto md:mx-0">
                            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 shadow-md">
                                <img
                                    src="/b2f9b8ad-2dfd-46e6-87b2-8b95bb3b31d2.jpg"
                                    alt="Figure 2: Journal Cover A4 Size Template"
                                    className="w-full h-auto object-contain rounded shadow-sm border border-slate-200"
                                />
                            </div>

                        </div>

                        {/* Right Column: Write-up from data.txt */}
                        <div className="flex-1 space-y-5">
                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif md:font-sans font-bold text-slate-900 tracking-tight leading-snug">
                                Journal of Advanced Pharmaceutical and Health Sciences Education and Research
                            </h1>

                            {/* Badges Bar (Chitkara Style) */}
                            {/* <div className="flex flex-wrap gap-1.5 pt-1">
                                <span className="bg-[#2c3e50] text-white text-xs font-semibold px-3 py-1.5 rounded-xs tracking-wide">
                                    Open access
                                </span>
                                <span className="bg-[#475569] text-white text-xs font-semibold px-3 py-1.5 rounded-xs tracking-wide">
                                    Peer-Review
                                </span>
                                <span className="bg-slate-950 text-white text-xs font-semibold px-3 py-1.5 rounded-xs tracking-wide">
                                    Ethical Publishing
                                </span>
                                <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-xs tracking-wide">
                                    High Visibility
                                </span>
                            </div> */}

                            {/* Paragraph */}
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                                The Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) is a multidisciplinary, peer-reviewed, open-access journal dedicated to the advancement of pharmaceutical and Health Sciences. The purpose of journal is to provide a national platform for researchers, academicians, healthcare professionals, pharmacists and students to publish innovative scientific findings and evidence based practices.
                            </p>

                            {/* Key Features */}
                            <div className="pt-4 border-t border-slate-100">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                                    {keyFeatures.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/80 hover:bg-slate-100 transition-colors"
                                        >
                                            <FaCheck className="text-blue-600 size-3 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Editorial Contact Details Section */}
                <section>


                    {/* Cards — Editor-in-Chief (full width) + Editor & Publisher (side by side) */}
                    <div className="flex flex-col gap-6">

                        {/* Card 1: Editor-in-Chief — Full Width Horizontal */}
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row">
                                {/* Left Label Strip */}
                                <div className="bg-slate-900 text-white px-6 py-5 md:py-0 md:w-56 shrink-0 flex items-center justify-center md:justify-start gap-3">
                                    <FaUserTie size={16} className="opacity-70" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Editor-in-Chief</span>
                                </div>
                                {/* Content */}
                                <div className="flex-1 p-6 md:p-7 flex flex-col sm:flex-row sm:items-start gap-6">
                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">Dr. Manish Goswami</h3>
                                            <p className="text-sm text-slate-500 font-medium">Principal &amp; Professor</p>
                                        </div>
                                        <div className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <FaBuilding className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span>Swami Vivekanand College of Pharmacy (SVCP)</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 text-sm text-slate-500">
                                            <FaLocationDot className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span className="leading-relaxed">
                                                Chandigarh-Patiala National Highway in Sector-8, Ramnagar, near Banur, Rajpura Tehsil, Patiala Punjab-140601.
                                            </span>
                                        </div>
                                    </div>
                                    {/* Contact Info */}
                                    <div className="sm:border-l sm:border-slate-100 sm:pl-6 space-y-3 shrink-0">
                                        <div className="flex items-center gap-2.5 text-sm">
                                            <FaPhone className="text-slate-400" size={12} />
                                            <span className="font-semibold text-slate-700">98722-62777</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-sm">
                                            <FaEnvelope className="text-slate-400" size={12} />
                                            <a href="mailto:principalsvcp@sviet.ac.in" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline">
                                                principalsvcp@sviet.ac.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Editor + Publisher side by side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 2: Editor — Vertical */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="border-b border-slate-100 px-6 py-4 flex items-center gap-3">
                                    <FaUserTie className="text-slate-500" size={14} />
                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Editor</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Dr. Amit Goel</h4>
                                        <p className="text-sm text-slate-500 font-medium">Professor</p>
                                    </div>
                                    <div className="space-y-2.5 text-sm text-slate-600">
                                        <div className="flex items-start gap-2.5">
                                            <FaBuilding className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span>Swami Vivekanand College of Pharmacy (SVCP)</span>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <FaLocationDot className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span className="text-slate-500 leading-relaxed">
                                                Chandigarh-Patiala National Highway in Sector-8, Ramnagar, near Banur, Rajpura Tehsil, Patiala Punjab-140601.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-slate-100">
                                        <div className="flex items-center gap-2.5 text-sm">
                                            <FaPhone className="text-slate-400" size={12} />
                                            <span className="font-semibold text-slate-700">99141-00231</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Publisher — Vertical */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="border-b border-slate-100 px-6 py-4 flex items-center gap-3">
                                    <FaBuilding className="text-slate-500" size={14} />
                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Publisher</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Pharmacy Research Group</h4>
                                        <p className="text-sm text-slate-500 font-medium">Official Publishing Body</p>
                                    </div>
                                    <div className="space-y-2.5 text-sm text-slate-600">
                                        <div className="flex items-start gap-2.5">
                                            <FaBuilding className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span>Swami Vivekanand College of Pharmacy (SVCP)</span>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <FaLocationDot className="text-slate-400 shrink-0 mt-1" size={13} />
                                            <span className="text-slate-500 leading-relaxed">
                                                Chandigarh-Patiala National Highway in Sector-8, Ramnagar, near Banur, Rajpura Tehsil, Patiala Punjab-140601.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
