
import React from 'react';

import { FaBullseye } from 'react-icons/fa6';

const AimScopeComponents: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Header */}
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <FaBullseye className="text-slate-700 size-7" /> Aim and Scope
                </h1>
            </div>

            {/* Content Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                {/* Core Mission Statement */}
                <p className="text-sm md:text-base leading-relaxed text-slate-900 font-medium">
                    The Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) is an open access, peer reviewed academic journal for the publication of scientific research and review papers in the fields of pharmaceutical sciences, health sciences and healthcare research.
                </p>

                {/* Core Features List */}
                <ul className="space-y-4 text-xs md:text-sm text-slate-600 pl-1">
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span className="leading-relaxed">
                            JAPHSER accepts original and un-plagiarized research and review articles for publication.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span className="leading-relaxed">
                            Peer reviewed articles to be published online in the JAPHSER without delay for immediate access and citation after the publication process is completed.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span className="leading-relaxed">
                            JAPHSER promote scientific innovation, academic collaboration and the spreading of knowledge that supports improved healthcare practices, patient safety, professional education, and public health development.
                        </span>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default AimScopeComponents;