import React from 'react';
import { FaClipboardList } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReviewerInstructionsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto my-10 px-4 font-sans text-slate-700 antialiased leading-relaxed">

                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaClipboardList className="text-slate-600 size-6" /> Reviewer's Instructions
                    </h1>
                </div>

                {/* Introduction */}
                <section className="mb-10">
                    <div className="space-y-3 text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            Peer review is a critical process aimed to enhance the quality and scientific integrity of manuscripts under evaluation. Although it is a time consuming task and remains essential for maintaining the journal standards of research article publishing. The journal acknowledges and sincerely appreciates the time, expertise and their efforts in this evaluation process.
                        </p>
                        <p>
                            Reviewers are responsible for carefully and ethically assessing submitted manuscripts. They are expected to give fair, respectful, constructive and unbiased feedback to authors. The review process should be conducted in a manner which supports to authors in strengthening the quality and impact of their work. The journal editorial board identifies potential reviewers through multiple sources including professional networks, published scientific literature, bibliographic databases and reviewer suggestions provided by authors. The remarks and recommendations of reviewers play a decisive role in the editorial decision making process regarding the acceptance or rejection of submitted manuscripts.
                        </p>
                    </div>
                </section>

                {/* Responsibilities of Reviewers */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Responsibilities of Reviewers
                    </h2>
                    <div className="space-y-3 text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            Reviewers must adhere to the following ethical and professional standards:
                        </p>
                        <ul className="space-y-2 pl-4 list-disc">
                            <li>Reviews must be conducted objectively, fairly and without any biasness.</li>
                            <li>Personal criticism of the authors must be strictly avoided.</li>
                            <li>Comments on manuscript should be constructive with clear suggestions for improvement wherever necessary.</li>
                            <li>Reviewer identity must be maintained confidential and no information that reveals identity should be disclosed.</li>
                            <li>Reviewers must decline assignments in case of any conflict of interest.</li>
                            <li>Confidentiality of the manuscript and the review process must be strictly maintained by the reviewers.</li>
                            <li>Reviewers may also communicate additional comments directly to the editor when necessary.</li>
                        </ul>
                    </div>
                </section>

                {/* Evaluation Criteria */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Evaluation Criteria for Manuscripts
                    </h2>
                    <div className="space-y-3 text-[13px] text-slate-600 leading-relaxed">
                        <p>
                            Reviewers should carefully consider the following aspects while reviewing a manuscript:
                        </p>
                        <ul className="space-y-2 pl-4 list-disc">
                            <li>Relevance and significance of the topic for the journal scope.</li>
                            <li>Clarity and relevance of the title, abstract, keywords, introduction, and conclusions.</li>
                            <li>Overall quality of writing including grammar and language.</li>
                            <li>Clarity of research objectives and appropriateness of the research methodology.</li>
                            <li>Ethical compliance including necessary approvals and consents.</li>
                            <li>Accuracy and appropriateness of statistical analysis and interpretation of results.</li>
                            <li>Identification of any data manipulation and inconsistencies.</li>
                            <li>Necessity of tables and figures.</li>
                            <li>Logical consistency between results and conclusions.</li>
                            <li>Adequacy, relevance and formatting of references.</li>
                        </ul>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default ReviewerInstructionsPage;
