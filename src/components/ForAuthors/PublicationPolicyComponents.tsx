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
                <div className="space-y-4 text-xs text-justify md:text-sm leading-relaxed text-slate-600">
                    <p>
                        Journal of Advanced Pharmaceutical and Health Sciences Education & Research (JAPHSER) is committed to maintaining the highest standards of publication ethics, research integrity, transparency and academic excellence.  The JAPHSER also follows globally accepted ethical publishing practices recognized by other journal publishing agencies. The article which is sent with the undertaking that is unpublished earlier and the authors is fully responsible for the legal issues to plagiarism etc are allowed to be published. On the basis of comments of reviewers, the articles will be either accepted, rejected or sent back for correction. The Editorial Advisory Board reserves the right to delete or remove any of the articles which violates journal ethical policy at any stage before or after publication.
                    </p>
                    <p>
                        The journal is dedicated to fostering ethical, transparent and high-quality research publication in the field of pharmaceutical and health sciences education and multidisciplinary research. Authors, reviewers and editors are expected to uphold these principles throughout the publication process. The authors should prepare manuscripts in accordance with the guidelines of the journal. The manuscripts that do not comply with the guidelines will be rejected or sent back to the authors for correction.  Authors, reviewers and editors must disclose any financial, professional, institutional or personal relationships that could influence the research or publication process.


                    </p>
                </div>


                {/* Conflict of Interest Mandate Subsection */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                   
                    <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-600">
                        
                        <p className="bg-slate-50 border border-slate-150 rounded p-3 text-slate-700 font-medium text-justify">
                            <strong>Rapid Publication:</strong> After submission of the manuscript, peer reviewed and first decision will be provided to authors approximately in 20 days. After acceptance, the publication will be undertaken in 5 days.


                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}