import React from 'react';
import { FaGavel } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JournalEditorialPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto my-10 px-4 font-sans text-slate-700 antialiased leading-relaxed">

                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaGavel className="text-slate-600 size-6" /> Journal Editorial Policy
                    </h1>
                </div>

                {/* Editorial Authority & Review Process */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Editorial Authority & Review Process
                    </h2>
                    <div className="space-y-3 text-[13px] text-justify text-slate-600 leading-relaxed">
                        <p>
                            The Journal Chief Editor is responsible for the final decision regarding the acceptance or rejection of manuscripts. All submitted manuscripts undergo a rigorous peer review process to ensure the quality and integrity of the published work. Each manuscript is evaluated by at least two independent reviewers in the relevant field.
                        </p>
                        <p>
                            Based on the reviewers' comments, the editorial board may decide to accept the manuscript, or request minor/major revisions, or reject it. The final decision pertaining to the publication of a manuscript rests entirely with the Chief Editor of the journal.
                        </p>
                        <p>
                            All editorial decisions of the journal are made independently and are not influenced by any external agencies.
                        </p>
                    </div>
                </section>

                {/* Ethical Standards & Research Integrity */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Research Integrity
                    </h2>
                    <div className="space-y-3 text-[13px] text-justify text-slate-600 leading-relaxed">
                        <p>
                           All manuscripts should be screened for plagiarism and AI content using Drillbrit detection tool. The submitted manuscript with a high similarity index (&gt; 20 %) will be rejected. Manuscripts exceeding 15% similarity should be returned for revision depending on the nature of similarity report. The journal does not tolerate any form of data fabrication, falsification or unethical manipulation of research data. Authors are required to ensure that their research works are original and have not been submitted or published elsewhere. Editors will not involve in any decisions about the papers that they have written themselves. 
                        </p>
                    </div>
                </section>

                {/* Reviewer Responsibilities */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Reviewer Responsibilities & Author Feedback
                    </h2>
                    <div className="space-y-3 text-justify text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            Reviewers are required to maintain strict confidentiality throughout the peer-review process including constructive feedback report, and all manuscript related information. Authors receive peer review reports for their manuscript alongside the formal editorial decision. Reviewer reports help authors revise their manuscript so that it may be accepted for publication. 
                        </p>
                    </div>
                </section>

                {/* Policy Violations */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Enforcement & Policy Violations
                    </h2>
                    <div className="space-y-3 text-justify text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            Failure to adhere to the above provisions will result in appropriate corrective action by the chief editor. If authors are found to be in violation, they may be prohibited from future submissions to the journal and the matter may be referred to their College ethics committee.
                        </p>
                    </div>
                </section>

                {/* Preservation & Corrections */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Preservation, Disclaimers & Corrections
                    </h2>
                    <div className="space-y-3 text-justify text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            The journal is published periodically and all published content is archived to ensure long term accessibility and preservation. The views and opinions expressed in the articles are solely those of the authors and the journal does not assume responsibility for any inaccuracies or consequences arising from the use of published information. In cases where significant errors or ethical concerns are identified after publication, the journal will issue corrections or retractions as necessary. Retraction notices will be clearly linked to the original article to maintain transparency in the scholarly record.


                        </p>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default JournalEditorialPolicy;