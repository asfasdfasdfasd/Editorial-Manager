import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaUserTie, FaBuilding, FaLocationDot } from 'react-icons/fa6';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 antialiased">

                {/* Page Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-[3px] bg-slate-800 rounded-full"></div>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                            Contact Information
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Editorial Contact Details
                    </h2>
                    <p className="text-base text-slate-500 mt-2 max-w-2xl">
                        Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER)
                    </p>
                </div>

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
                                        <p className="text-sm text-slate-500 font-medium">Principal & Professor</p>
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
                                        <a href="mailto:principalsvcp@sviet.ac.in" className="font-semibold text-slate-700 hover:text-slate-900 hover:underline">
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
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;