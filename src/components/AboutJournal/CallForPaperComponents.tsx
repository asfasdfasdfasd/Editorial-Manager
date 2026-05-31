import React from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { BsMegaphone } from 'react-icons/bs';
const CallForPaperComponents: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Section Header */}
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <BsMegaphone className="text-slate-700 size-7" /> Call for Papers
                </h1>
            </div>

            {/* Content Card Wrapper */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                {/* Invited Requirements Guidelines List */}
                <ul className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-600">
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-slate-400 size-4 shrink-0 mt-0.5" />
                        <span>
                            Original, unpublished and un-plagiarized research and review articles are invited for the publication in the Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER). Articles will be considered for publication only if they fall within the domain of the aim and the scope of the Journal.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-slate-400 size-4 shrink-0 mt-0.5" />
                        <span>
                            The submission of manuscript is open throughout the year. The articles will be published in JAPHSER four times in a year (January, April, July, and October).
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-slate-400 size-4 shrink-0 mt-0.5" />
                        <span>
                            The domain of the Journal is national and submissions are subject to double-blind peer review process.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-slate-400 size-4 shrink-0 mt-0.5" />
                        <span>
                            The JAPHSER does not charge any submission and publication fees.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-slate-400 size-4 shrink-0 mt-0.5" />
                        <span>
                            After acceptance of the articles for publication in JAPHSER, an Article Processing Charge (APC) fee will be charged to authors, which covers typesetting, peer review, hosting and ensuring articles is made freely available to the public.
                        </span>
                    </li>
                </ul>

                {/* Editorial Office Inquiry Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <FaEnvelope className="text-slate-400 shrink-0" />
                    <span>If having further queries, please contact the Editorial Office.</span>
                </div>

            </div>
        </div>
    );
};

export default CallForPaperComponents;