import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFilePdf, FaEye, FaDownload, FaCircleArrowLeft } from 'react-icons/fa6';

interface Article {
    sNo: number;
    title: string;
    authors: string;
    doi: string;
    citation: string;
    fileSize: string;
    views: number;
    downloads: number;
}

// Exact dataset matched from the client's reference specification sheet screenshot 
const dummyArticles: Article[] = [
    {
        sNo: 1,
        title: 'Preparation and in-vitro evaluation of controlled release tablet of rosuvastatin',
        authors: 'Arjun Singh, Ashok Baghel and Dinesh Sharma',
        doi: 'https://www.doi.org/10.33545/26647222.2026.v8.i5a.393',
        citation: 'Int. J. Pharm. Pharm. Sci., 2026; 8(5): Part A, 01-09',
        fileSize: '947 KB',
        views: 132,
        downloads: 66
    },
    {
        sNo: 2,
        title: 'Introduction to precision medicine: A comprehensive review',
        authors: 'Narendra Sharma, Pushpendra Kumar Saini and Vishal Garg',
        doi: 'https://www.doi.org/10.33545/26647222.2026.v8.i5a.394',
        citation: 'Int. J. Pharm. Pharm. Sci., 2026; 8(5): Part A, 10-12',
        fileSize: '577 KB',
        views: 110,
        downloads: 49
    }
];

const IssuePartView: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Parsing parameters from slug string (e.g., 2026.v8.i5.A) to build exact header titles cleanly 
    const formatHeaderTitle = () => {
        if (!slug) return 'Vol. 8, Issue 5, Part A (2026)';
        const parts = slug.split('.');
        if (parts.length < 4) return 'Archived Issue Content';

        const year = parts[0];
        const vol = parts[1].replace('v', '');
        const issue = parts[2].replace('i', '');
        const part = parts[3];

        return `Vol. ${vol}, Issue ${issue}, Part ${part} (${year})`;
    };

    return (
        <div className="max-w-5xl mx-auto my-8 px-4 font-sans">
            {/* Navigation & Back Action trigger row */}
            <div className="mb-4">
                <Link
                    to="/articles/archive"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors font-medium"
                >
                    <FaCircleArrowLeft /> Back to Archive Directory
                </Link>
            </div>

            {/* Formal Red Accent Header Banner Section  */}
            <div className="border-b-2 border-red-700 pb-2 mb-6 text-center">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-800 tracking-wide">
                    {formatHeaderTitle()}
                </h2>
            </div>

            {/* Structured Table Layout with custom horizontal overflow management  */}
            <div className="bg-white border border-slate-200 rounded shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 text-xs font-bold font-mono">
                                <th className="py-3 px-4 text-center w-16 border-r border-slate-200">S. No.</th>
                                <th className="py-3 px-6">Title and Authors Name</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
                            {dummyArticles.map((article) => (
                                <tr key={article.sNo} className="hover:bg-slate-50/60 transition-colors">
                                    {/* Sequential Number Identification Box  */}
                                    <td className="py-4 px-4 text-center font-medium text-slate-600 border-r border-slate-200 align-top font-mono">
                                        {article.sNo}
                                    </td>

                                    {/* Master Metadata Stack Block  */}
                                    <td className="py-4 px-6 space-y-2 align-top">
                                        {/* Document Title Link  */}
                                        <h3 className="text-sm font-bold text-amber-950 hover:text-blue-700 cursor-pointer tracking-wide transition-colors leading-snug">
                                            {article.title}
                                        </h3>

                                        {/* Document Author String  */}
                                        <p className="text-slate-600 font-medium italic">
                                            {article.authors}
                                        </p>

                                        {/* Functional DOI Link Interface Block  */}
                                        <p className="font-mono text-[11px] text-slate-500">
                                            <span className="font-bold text-slate-700">DOI:</span>{' '}
                                            <a
                                                href={article.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline transition-all break-all"
                                            >
                                                {article.doi}
                                            </a>
                                        </p>

                                        {/* Absolute Citation Identifier Text  */}
                                        <p className="text-[11px] font-medium text-slate-500 font-mono">
                                            {article.citation}
                                        </p>

                                        {/* Horizontal Control Utility Strip Line  */}
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400 font-medium pt-1">
                                            <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-colors">
                                                Abstract
                                            </button>
                                            <span className="text-slate-200">|</span>

                                            <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-colors flex items-center gap-1">
                                                <FaFilePdf className="text-red-600" /> Download
                                            </button>
                                            <span className="text-slate-200">|</span>

                                            <span className="text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-mono">
                                                File Size: ({article.fileSize})
                                            </span>
                                            <span className="text-slate-200">|</span>

                                            <span className="flex items-center gap-1 text-slate-600 bg-blue-50/50 px-1.5 py-0.5 rounded text-[10px] font-mono">
                                                <FaEye className="text-blue-500" /> {article.views} Views
                                            </span>

                                            <span className="flex items-center gap-1 text-slate-600 bg-emerald-50/50 px-1.5 py-0.5 rounded text-[10px] font-mono">
                                                <FaDownload className="text-emerald-500" /> {article.downloads} Downloads
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default IssuePartView;