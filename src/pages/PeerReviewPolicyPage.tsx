import React, { useState } from 'react';
import {
    FaShieldHalved,
    FaMagnifyingGlass,
    FaUserCheck,
    FaFileSignature,
    FaEnvelopeOpenText,
    FaTriangleExclamation
} from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface StepAccordionProps {
    stepNumber: number;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const StepAccordion: React.FC<StepAccordionProps> = ({ stepNumber, icon, title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50/80 transition-colors duration-150 cursor-pointer"
            >
                <span className="shrink-0 bg-slate-800 text-white font-mono text-xs font-bold rounded-full size-7 flex items-center justify-center">
                    {stepNumber}
                </span>
                <span className="text-slate-500 shrink-0">{icon}</span>
                <span className="text-sm font-semibold text-slate-900 flex-1">{title}</span>
                <FiChevronDown
                    className={`text-slate-400 size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PeerReviewPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto my-10 px-4 font-sans text-slate-700 antialiased leading-relaxed">

                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaShieldHalved className="text-slate-600 size-6" /> Peer Review Policy
                    </h1>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                        Peer review is a critical component of the paper publication process. It plays a very important role in maintaining the integrity, reliability, and quality of published research articles, while supporting the advancement of ethical and scientific knowledge. The journal is committed to ensuring timely review and publication of accepted manuscripts.
                    </p>
                </div>

                {/* General Policy Note */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 mb-10 text-[13px] leading-relaxed text-slate-600">
                    To support high publication standards, all submitted manuscripts undergo a rigorous and confidential peer review process. Simultaneous submission of the same manuscripts for publication to other journals is strictly prohibited. All submitted manuscripts will be treated as highly confidential documents. Editors and reviewers shall maintain strict confidentiality.
                </div>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
                        Key Features of the Policy
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            {
                                title: 'Expert Review Evaluation',
                                desc: 'Manuscripts will be reviewed by subject expert reviewers recommended by the Editorial Board.'
                            },
                            {
                                title: 'Final Editorial Authority',
                                desc: 'The final decision for publication will be made by the Editor-in-Chief based on reviewers\' reports. Authors will be promptly informed of the editor\'s decision.'
                            },
                            {
                                title: 'Conflict of Interest Disclosures',
                                desc: 'Editors and reviewers must disclose any conflicts of interest arising from competitive, collaborative, or any relationships with the authors and recuse themselves where necessary.'
                            },
                            {
                                title: 'Anonymity & Verification',
                                desc: 'The peer review process is a confidential system and the identities of reviewers should not be disclosed. Authors may contact the journal for any clarification regarding the policy.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-4 border border-slate-200 rounded-lg bg-white">
                                <span className="font-semibold text-slate-900 text-[13px] block mb-1">{item.title}</span>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publication Procedure — Expandable Steps */}
                <section className="mb-12">
                    <h2 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
                        Publication Procedure
                    </h2>

                    <div className="space-y-3">

                        {/* Step 1 */}
                        <StepAccordion
                            stepNumber={1}
                            icon={<FaMagnifyingGlass className="size-3.5" />}
                            title="Initial Screening"
                            defaultOpen={true}
                        >
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                All submitted manuscripts to the journal will be initially assessed by the Editor-in-Chief to ensure compliance with the journal author guidelines and ethical standards. Manuscripts that fail to meet the ethical requirements of the journal will be rejected at this stage without peer review.
                            </p>
                            <ul className="text-xs text-slate-500 leading-relaxed space-y-1.5 pl-1">
                                <li>• Submission of improperly formatted or incomplete manuscripts will be returned to the corresponding author for correction and resubmission.</li>
                                <li>• The Editor-in-Chief may consult Editors, Associate Editors, and Editorial Board Members in case of conflicts of interest to determine alignment with scope and scientific/medical validity.</li>
                                <li>• Decisions at this stage focus strictly on suitability and technical soundness rather than impact. All rejection decisions will be confirmed by the journal Editor-in-Chief.</li>
                            </ul>
                        </StepAccordion>

                        {/* Step 2 */}
                        <StepAccordion
                            stepNumber={2}
                            icon={<FaUserCheck className="size-3.5" />}
                            title="Peer Review Process"
                        >
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                Manuscripts successfully completing the initial screening will be assigned to at least two independent subject experts for review. The journal follows a <strong className="text-slate-800 font-semibold">double-blind peer review process</strong> wherein the identities of both authors and reviewers are concealed from each other. Only the Editor-in-Chief will have access information for both parties.
                            </p>
                            <div className="text-xs text-slate-500 leading-relaxed space-y-1.5 pl-1">
                                <p className="font-semibold text-slate-700 mb-1">Suggested Reviewer Parameters:</p>
                                <p>Authors may suggest potential reviewers during submission, provided they:</p>
                                <ul className="space-y-1">
                                    <li>• Have not co-authored publications with the authors within the past five years.</li>
                                    <li>• Are not affiliated with the same institutions as the authors.</li>
                                    <li>• Do not have any ongoing collaboration with the authors.</li>
                                </ul>
                            </div>
                        </StepAccordion>

                        {/* Step 3 */}
                        <StepAccordion
                            stepNumber={3}
                            icon={<FaFileSignature className="size-3.5" />}
                            title="Editorial Decision and Revision"
                        >
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                                All manuscripts must receive at least two independent review reports. Based on the reviewers' recommendations, the Editor-in-Chief communicates one of the following four pathways:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs leading-relaxed">
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-md">
                                    <span className="font-semibold text-slate-800 block mb-0.5">1. Accept with Minor Revisions</span>
                                    <p className="text-slate-500">The submitted manuscript is accepted with minor changes. Authors are typically given five days to submit the revised version.</p>
                                </div>
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-md">
                                    <span className="font-semibold text-slate-800 block mb-0.5">2. Major Revisions Required</span>
                                    <p className="text-slate-500">Acceptance is conditional upon substantial revision. Authors must provide a detailed point-wise response. Normally, only one round of major revision is permitted, subject to re-evaluation.</p>
                                </div>
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-md">
                                    <span className="font-semibold text-slate-800 block mb-0.5">3. Reject with Encouragement to Resubmit</span>
                                    <p className="text-slate-500">The manuscript requires significant additional work or experiments. Authors are suggested to revise and submit as a new manuscript after addressing suggestions.</p>
                                </div>
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-md">
                                    <span className="font-semibold text-slate-800 block mb-0.5">4. Reject</span>
                                    <p className="text-slate-500">The manuscript is rejected if it has serious shortcomings or lacks sufficient originality and contribution. Resubmission is not permitted.</p>
                                </div>
                            </div>
                        </StepAccordion>

                    </div>
                </section>

                {/* Author Appeals */}
                <section className="mb-12 border border-slate-200 rounded-lg bg-white overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-3">
                        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <FaEnvelopeOpenText className="text-slate-500" /> Author Appeals Workflow
                        </h2>
                    </div>
                    <div className="p-4 md:p-5 text-[13px] leading-relaxed text-slate-600 space-y-3">
                        <p>
                            Authors may appeal editorial decisions by submitting a detailed request via email to the Editorial Office. The appeal must include a comprehensive justification along with point-wise responses to the reviewer's and editor's comments.
                        </p>
                        <div className="p-3 border border-slate-100 rounded bg-slate-50/50 text-xs">
                            <span className="font-semibold text-slate-800 block mb-1">The Editor-in-Chief evaluates the appeal in consultation with editorial members to recommend:</span>
                            <p className="pl-3">• Acceptance</p>
                            <p className="pl-3">• Further peer review</p>
                            <p className="pl-3">• Upholding the original rejection decision</p>
                        </div>
                        <p className="text-xs font-medium text-slate-500 italic">
                            Decisions made at this stage are final and cannot be changed.
                        </p>
                    </div>
                </section>

                {/* Special Issues */}
                <section className="p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50/30 flex gap-3 text-xs leading-relaxed text-slate-600">
                    <FaTriangleExclamation className="text-slate-400 size-4 shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold text-slate-800 block mb-0.5">Special Issues Note:</span>
                        <p>
                            For special issues, the Editor forwards the manuscript and related materials (including reviewer details) to the Editor-in-Chief for independent evaluation. The Editor-in-Chief provides a final recommendation, and any rejection decision at this stage is considered final.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PeerReviewPolicy;