import React from 'react';

const OpenAccessPolicyComponent: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Header */}
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    Open Access Policy
                </h1>
            </div>

            {/* Content Container Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                {/* Mission and Scope Overview */}
                <div className="space-y-4">
                    <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                        The <strong>Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) </strong> provides immediate free access without subscription charges and registration barriers. The journal provides access to its content on the principle that making research work freely available to the researchers supports a greater national and international exchange of knowledge. The journal contents such as text, graphics, images and other contents are protected by copyright of the journal.
                    </p>

                    <p className="text-xs md:text-sm leading-relaxed text-slate-600 pt-4 border-t border-slate-100">
                        The open access policy of the <strong>JAPHSER</strong> aims at increasing the visibility and accessibility of the published content to researcher’s. Online free access and indexing in a larger number of bibliographic databases add to the high visibility and research impact.
                    </p>
                </div>



            </div>
        </div>
    );
};

export default OpenAccessPolicyComponent;