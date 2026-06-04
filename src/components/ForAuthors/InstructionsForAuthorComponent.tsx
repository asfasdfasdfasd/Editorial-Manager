import {
    FaFileLines,
    FaListOl,
    FaFileWord,
    FaBookBookmark,
    FaCircleExclamation
} from 'react-icons/fa6';

const InstructionsForAuthorComponent = () => {
    return (
        <div className="max-w-5xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Main Section Header */}
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                    <FaFileLines className="text-slate-700 size-7" /> Instructions for Authors
                </h1>
            </div>

            {/* Introductory Journal Scope */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8 shadow-sm text-xs md:text-sm leading-relaxed text-slate-600">
                <p>
                    The Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER) is an online Journal which publishes innovative research articles and review papers in field of Pharmacognos, Pharmaceutical Chemistry, Biopharmaceutics, Pharmacokinetics, Medicinal Chemistry, Computational Chemistry, Molecular Drug Design, Phytochemistry, Pharmacology, Pharmaceutical Analysis, Pharmacy Practice, Clinical and Hospital Pharmacy, Cell Biology, Health Sciences and Public Health, Allied Health & Paramedical Sciences and related field.
                </p>
            </div>

            {/* Preparation of Articles */}
            <section className="mb-8">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaFileWord className="text-slate-500 size-4" /> Preparation of Articles
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4 text-xs md:text-sm leading-relaxed text-slate-600">
                    <ul className="space-y-2 list-disc pl-4">
                        <li>Authors submitting manuscripts are required to adhere to journal author guidelines.</li>
                        <li>Manuscripts that do not meet the prescribed formatting and submission requirements may be returned by the Editorial Office for revision before being considered for peer review process.</li>
                        <li>The following word limits apply to manuscripts submitted to JAPHSER and vary according to the article type.</li>
                        <li>All manuscripts must be written in English and the text should be prepared in A4-size paper format with single spacing with 1-inch margins on all sides.</li>
                    </ul>

                    <div className="pt-3 border-t border-slate-200">
                        <span className="font-bold text-slate-900 block mb-2">Manuscripts should be organized in the following sequence:</span>
                        <div className="flex flex-wrap gap-2 text-[11px] font-mono font-medium">
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">1. Title</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">2. Abstract</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">3. Keywords</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">4. Introduction</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">5. Materials and Methods</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">6. Results & Discussion</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">7. Conclusions</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">8. Acknowledgements</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">9. References</span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">10. Author brief information with passport size photo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manuscript Section Details */}
            <section className="mb-8">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaListOl className="text-slate-500 size-4" /> Manuscript Section Guidelines
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-600">

                    {/* Title Page */}
                    <div className="bg-white border border-slate-200 p-4 rounded-md shadow-sm">
                        <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Title Page</h3>
                        <ul className="space-y-1.5 pl-3 list-disc">
                            <li>The title page should be included full title of the manuscript in bold, title case, and font size 14.</li>
                            <li>Author names should be presented in font size 12, using initials followed by surnames.</li>
                            <li>The institutional affiliations and addresses with pin code of all authors should be provided below the author names.</li>
                            <li>The corresponding author should be clearly identified with an asterisk (*).</li>
                            <li>The title of manuscript should be concise, informative and accurately reflect the content of the study.</li>
                            <li>At the bottom left corner of the title page, include the heading “*Address for Correspondence” followed by the corresponding author e-mail address. All correspondence regarding the manuscript will be directed to the designated corresponding author.</li>
                        </ul>
                    </div>

                    {/* Abstract & Keywords */}
                    <div className="bg-white border border-slate-200 p-4 rounded-md shadow-sm space-y-4">
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Abstract</h3>
                            <p>The abstract of manuscript should concise summary of the study that should briefly reflect all aspects of the study for articles, the abstract should not exceed 150 -250 words.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Keywords</h3>
                            <p>Authors should provide 4 to 6 keywords that accurately reflect the main topics and content of the manuscript. Keywords should be written immediately below the abstract and should be arranged in order of relevance.</p>
                        </div>
                    </div>

                    {/* Intro & Methods */}
                    <div className="bg-white border border-slate-200 p-4 rounded-md shadow-sm space-y-4">
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Introduction</h3>
                            <p>The Introduction should be provided a concise background to the research problem, highlighting its significance and relevance. It must include a brief review of the significant literature, identify existing knowledge gaps and clearly state the objectives and foundation of the research study.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Materials and Methods</h3>
                            <p>This section must describe the materials, equipment, study site and period of experimentation used in the experimental research. Authors should be provide sufficient details regarding the experimental design, procedures, data collection methods and analytical techniques employed to ensure the reproducibility of the study.</p>
                        </div>
                    </div>

                    {/* Results & Conclusion */}
                    <div className="bg-white border border-slate-200 p-4 rounded-md shadow-sm space-y-4">
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Result & Discussions</h3>
                            <p>The results section should include the findings of the study clearly and objectively. Data should be reported in a logical sequence using text, tables and figures where suitable. Statistical significance should be clearly indicated.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Conclusions</h3>
                            <p>Articles conclusion should be concise including key findings of the study. It should highlights the practical and/or clinical significance of the results, discuss their potential applications and clearly state both the strengths and limitations of the study.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* References & Acknowledgements */}
            <section className="mb-8">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-1.5 uppercase">
                    <FaBookBookmark className="text-slate-500 size-4" /> Referencing & Acknowledgements
                </h2>
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-5 text-xs leading-relaxed text-slate-600">

                    {/* General Rules */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">References Formatting</h3>
                        <p>References should be appeared just below the conclusions in articles. References should be numbered consecutively in the order of their first appearance in the manuscript and not arranged alphabetically. References citations should be indicated in text, figures and tables using Arabic numerals in square bracket.</p>
                    </div>

                    {/* Reference Samples Table */}
                    <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-50">
                        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 font-bold text-slate-800">
                            Reference Samples
                        </div>
                        <div className="divide-y divide-slate-200">
                            <div className="p-4 space-y-1">
                                <span className="font-bold text-slate-800 block">Journal Article</span>
                                <p className="font-mono text-[11px] bg-white p-2 border border-slate-100 rounded text-slate-500">
                                    Author(s). Title of the article, Journal Name, Year; Volume (Issue) page numbers.<br />
                                    <strong className="text-slate-700">Example:</strong> Saini S.N., Manish O., Sharma N.: Isolation and separation of drugs. Journal of Pharmacy 2017; 4 (39) 369-373.
                                </p>
                            </div>
                            <div className="p-4 space-y-1">
                                <span className="font-bold text-slate-800 block">Book</span>
                                <p className="font-mono text-[11px] bg-white p-2 border border-slate-100 rounded text-slate-500">
                                    <strong className="text-slate-700">Example:</strong> Kalia A.N., Sharma P.: A Text Book of Industrial Pharmacy. RAS Publisher, First Edition 2018.
                                </p>
                            </div>
                            <div className="p-4 space-y-1">
                                <span className="font-bold text-slate-800 block">A Chapter in a Book</span>
                                <p className="font-mono text-[11px] bg-white p-2 border border-slate-100 rounded text-slate-500">
                                    Author (s) of chapter: Title of chapter. In: Editor(s) Name, Editors. Title of Book. Publisher Name; Edition Year: Page numbers.<br />
                                    <strong className="text-slate-700">Example:</strong> Kaur K.M., Singh P.K.: Chromosome alterations in tumors. In: Patel B., Verma K.W., Editors. Basics of human cancer, GK Prakashan, Second Edition 2006: 242-246.
                                </p>
                            </div>
                            <div className="p-4 space-y-1">
                                <span className="font-bold text-slate-800 block">For Patent Reference</span>
                                <p className="font-mono text-[11px] bg-white p-2 border border-slate-100 rounded text-slate-500">
                                    Inventors Name, Title of patent. Patent No; Published /Grant Year.<br />
                                    <strong className="text-slate-700">Example:</strong> Maurya H.K, Singh D., Vered K.P.: Submicron emulsions in drug delivery system. Patent No. 5497415; 2017.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Acknowledgements */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Acknowledgement (if applicable)</h3>
                        <p>Acknowledgement should be placed at the end of the manuscript just immediately before the references section. Authors may acknowledge individuals who contributed to the work but do not meet the criteria for authorship as well as to recognize financial support, donated materials, institutional assistance or other significant contributions to the research.</p>
                    </div>
                </div>
            </section>

            {/* Note Warning */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md flex gap-3 text-xs md:text-sm text-slate-700 font-medium">
                <FaCircleExclamation className="text-blue-600 shrink-0 mt-0.5" />
                <p>
                    Note: Authors are requested to send their manuscript strictly according to the above instruction to the authors.
                </p>
            </div>
        </div>
    );
}

export default InstructionsForAuthorComponent;