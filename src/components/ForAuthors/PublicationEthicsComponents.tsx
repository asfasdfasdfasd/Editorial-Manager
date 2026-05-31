import React from 'react';
import {
    FaBookOpen,
    FaUserTie,
    FaUserCheck,
    FaPenNib,
    FaBuildingColumns,
    FaTriangleExclamation
} from 'react-icons/fa6';

const PublicationEthicsComponents: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Header Section */}
            <div className="border-b border-slate-200 pb-4 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <FaBookOpen className="text-slate-700 size-7" /> Publication Ethics and Malpractice Statement
                </h1>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    The Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) follows the Best Practice guidelines. This statement is based on the guidelines and standards developed by the Committee on Publication Ethics.
                </p>
            </div>

            {/* Section 1: Duties of Editors */}
            <section className="mb-10">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaUserTie className="text-slate-500 size-4" /> Duties of Editors and Associate Editors
                </h2>
                <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4 text-xs leading-relaxed">
                    <div>
                        <span className="font-bold text-slate-900 block mb-1">Decision on the Publication of Articles</span>
                        <p className="text-slate-600">
                            The Editor-in-chief of the Journal of Advanced Pharmaceutical and Health Sciences Education and Research is responsible for making the decision regarding the publication of submitted articles. The Editor-in-chief may be guided by the policies of the journal's editorial board and subjected to such legal requirements. The Editor is authorized to carry out the decision in consultation with concerned reviewers and editorial committee members.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">Fair Play</span>
                            <p className="text-slate-500">Manuscripts should be evaluated solely on intellectual content without discrimination based on race, gender, sexual orientation, religious beliefs, ethnicity, citizenship, or political ideology.</p>
                        </div>
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">Confidentiality</span>
                            <p className="text-slate-500">The editor, associate editors, and editorial staff must not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, other editorial advisers, and the publisher, as appropriate. The editor must ensure the integrity of double-blind peer-review.</p>
                        </div>
                        <div>
                            <span className="font-bold text-slate-900 block mb-1">Conflicts of Interest</span>
                            <p className="text-slate-500">Unpublished material contained in a submitted manuscript must not be used by editors, reviewers, or any individual involved in the editorial process for their own research purposes without obtaining prior written consent from the author.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Duties of Reviewers */}
            <section className="mb-10">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaUserCheck className="text-slate-500 size-4" /> Duties of Reviewers
                </h2>
                <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4 text-xs leading-relaxed">
                    <p>
                        <strong className="text-slate-900 font-semibold">Contribution of Peer Review:</strong> Peer review supports the editor in making informed publication decisions, while feedback provided during the review process helps authors improve the quality of their manuscript.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1">
                            <span className="font-bold text-slate-900 block">Promptness & Objectivity</span>
                            <p className="text-slate-600">If a reviewer considers themselves unqualified to assess a manuscript, they must promptly inform the Editor-in-Chief and decline participation. Reviews are expected to be professional, honest, courteous, prompt, and constructive; judgment should be objective without personal criticism.</p>
                        </div>
                        <div className="space-y-1">
                            <span className="font-bold text-slate-900 block">Confidentiality Protocols</span>
                            <p className="text-slate-600">Manuscripts assigned to a reviewer must be treated as confidential documents and must not be shown to or discussed with others except as authorized by the Editor-in-Chief. Information or ideas obtained through peer review must not be used for personal advantage.</p>
                        </div>
                        <div className="space-y-1 md:col-span-2 border-t border-slate-100 pt-3">
                            <span className="font-bold text-slate-900 block">Acknowledgment of Sources & Conflicts</span>
                            <p className="text-slate-600">Reviewers should note uncited work that was published previously and authors are expected to provide proper citations. Reviewers must inform the EIC of any substantial similarity between the assigned manuscript and any other previously published paper. Additionally, reviewers must decline evaluating manuscripts where they have conflicts of interest resulting from competitive, collaborative, or other relationships with any authors, companies, or institutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Duties of Authors */}
            <section className="mb-10">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaPenNib className="text-slate-500 size-4" /> Duties of Authors
                </h2>
                <div className="border border-slate-200 rounded-lg divide-y divide-slate-100 bg-white text-xs leading-relaxed text-slate-600">
                    <div className="p-4">
                        <span className="font-bold text-slate-900 block mb-1">Reporting Standards & Data Access</span>
                        <p>Authors of original research articles must present accurate data, clearly state objectives, and explain findings. Code and data should contain sufficient detail and references to allow reproducibility. Knowing inaccuracies constitute unethical conduct. Authors may be asked to provide raw/supplementary data for public access and should retain it for a reasonable time after publication.</p>
                    </div>
                    <div className="p-4 bg-slate-50/50">
                        <span className="font-bold text-slate-900 block mb-1">Originality, Plagiarism, & Penalties</span>
                        <p>Authors must ensure the complete originality and novelty of their drafts, properly citing or quoting used works. All submissions are screened using plagiarism detection software, and any detected plagiarism during the review/editorial process results in immediate rejection. If proven after publication, the manuscript will be retracted. Serious cases may lead to:</p>
                        <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-500">
                            <li>Debarring the authors from future publications in the journal.</li>
                            <li>Notifying the author's funding agencies, working institutes, and the original plagiarized authors.</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <span className="font-bold text-slate-900 block mb-1">Redundant or Duplicate Submission</span>
                        <p>Submitting the same manuscript (or similar data) to multiple journals at the same time is strictly unacceptable. Authors should not publish manuscripts describing the same concept across multiple platforms. Handling editors monitor all related submissions; undetected violations found post-publication will result in a formal notice of ethical violation being published.</p>
                    </div>
                    <div className="p-4">
                        <span className="font-bold text-slate-900 block mb-1">Authorship, Disclosures, & Errors</span>
                        <p>Authorship is strictly limited to contributors who made a significant contribution to the conception, design, execution, or interpretation of the study. The corresponding author ensures no inappropriate co-authors are listed and all co-authors must check the final draft before submission. Funding sources, financial disclosures, or substantive conflicts of interest must be explicitly declared. If an author discovers a fundamental error in their published work, they must promptly notify the journal editor to retract or correct the paper.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Duties of the Publisher */}
            <section className="mb-10">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaBuildingColumns className="text-slate-500 size-4" /> Duties of the Publisher
                </h2>
                <div className="bg-white border border-slate-200 rounded-lg p-5 text-xs leading-relaxed text-slate-600 space-y-2">
                    <p>
                        The publisher is supposed to protect the intellectual property and copyright of the contents submitted by authors, while strictly respecting the privacy and personal data of authors and peer reviewers. The publisher works in close co-operation with the editors and reviewers to maintain editorial independence and to guarantee transparency and integrity in the peer-review process.
                    </p>
                    <p>
                        In cases of alleged or proven scientific misconduct, fraudulent publication, or plagiarism, the publisher, in close collaboration with the editors, will take all appropriate measures to clarify the situation and amend the article in question.
                    </p>
                </div>
            </section>

            {/* Section 5: Publishing Ethics Issues */}
            <section className="mb-4">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaTriangleExclamation className="text-slate-500 size-4" /> Publishing Ethics Issues
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                    <div className="p-4 border border-slate-200 rounded-md bg-white space-y-1">
                        <span className="font-bold text-slate-900 block">Ethics Monitoring</span>
                        <p className="text-slate-600">The editor-in-chief must establish a mechanism for monitoring and safeguarding publishing ethics. All complaints received from reviewers, authors, or external parties will be taken into proper consideration and resolved promptly.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-md bg-white space-y-1">
                        <span className="font-bold text-slate-900 block">Retractions & Corrections</span>
                        <p className="text-slate-600">Published articles will be retracted if clear evidence shows findings are unreliable due to misconduct or honest error. Retracted articles remain on the website with a freely available retraction notice to maintain scientific record integrity. In rare legal infringement cases, the publisher may remove the text while retaining bibliographic info.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-md bg-white space-y-1">
                        <span className="font-bold text-slate-900 block">Article Withdrawal Policy</span>
                        <p className="text-slate-600">Manuscripts can be withdrawn without any Article Processing Charges within an initial stage of 4 days from the date of submission via an official signed withdrawal form. If authors decide to withdraw a manuscript after it has been formally accepted but not yet published, Article Processing Charges will remain fully chargeable.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-md bg-white space-y-1">
                        <span className="font-bold text-slate-900 block">Academic Freedom</span>
                        <p className="text-slate-600">Funding agencies and sponsors are precluded from influencing author findings or decision-making processes. Editors must protect the integrity of the academic record, ensuring business needs never compromise intellectual and ethical standards.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PublicationEthicsComponents;