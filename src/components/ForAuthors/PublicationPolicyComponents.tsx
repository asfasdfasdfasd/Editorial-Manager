import { FaUsers, FaScaleBalanced } from 'react-icons/fa6';
import { BsFileText } from 'react-icons/bs';
export default function PublicationPolicyComponents() {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Section Header */}
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <BsFileText className="text-slate-700 size-7" /> Publication Policy
                </h1>
            </div>

            {/* Content Card Wrapper */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                {/* Core Policy Overview Statements */}
                <div className="space-y-4 text-xs md:text-sm leading-relaxed text-slate-600">
                    <p>
                        The Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) is committed to maintaining the highest standards of publication ethics, research integrity, transparency and academic excellence. The journal follows globally accepted ethical publishing practices and guidelines established by the Publication Ethics Committee and other recognized publishing agencies.
                    </p>
                    <p>
                        JAPHSER is dedicated to fostering ethical, transparent and high-quality research publication in pharmaceutical sciences, health sciences, healthcare education and interdisciplinary research. All stakeholders including authors, reviewers and editors are expected to uphold these principles throughout the publication process. The authors should be prepared articles in accordance with the spelling rules of the journal and the articles that do not comply with the spelling rules are rejected or sent back to the authors for correction.
                    </p>
                </div>

                {/* Authorship Criteria Checklist Subsection */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h2 className="text-sm md:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <FaUsers className="text-slate-500 size-4" /> Authorship Criteria:
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600">
                        Authorship should be limited to individuals who have made substantial contributions to:
                    </p>
                    <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-1.5">
                        <li>Study conception and design.</li>
                        <li>Data collection, analysis or interpretation.</li>
                        <li>Manuscript drafting or critical revision.</li>
                        <li>Final approval of the submitted version.</li>
                    </ul>
                </div>

                {/* Conflict of Interest Mandate Subsection */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h2 className="text-sm md:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <FaScaleBalanced className="text-slate-500 size-4" /> Conflict of Interest:
                    </h2>
                    <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-600">
                        <p>
                            Authors, reviewers and editors must disclose any financial, professional, institutional or personal relationships that could influence the research or publication process.
                        </p>
                        <p className="bg-slate-50 border border-slate-150 rounded p-3 text-slate-700 font-medium">
                            All conflicts of interest must be declared at the time of submission and publication.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}