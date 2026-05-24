import React from 'react';
import { Link } from 'react-router-dom';
import { FaFolderOpen, FaCircleChevronRight } from 'react-icons/fa6';
import { FaArchive } from 'react-icons/fa';
interface ArchivePart {
    label: string;
    slug: string; // Used to build URL paths like /archives/2026.v8.i5.A 
}

interface ArchiveIssue {
    volumeInfo: string; // e.g., "VOL. 8 : ISSUE 5 (May 2026)" 
    parts: ArchivePart[];
}

interface ArchiveGroup {
    yearHeading: string; // e.g., "ARCHIVES FOR 2026" 
    issues: ArchiveIssue[];
}

// Data structural mapping matching the client's historical layout document exactly 
const archiveData: ArchiveGroup[] = [
    {
        yearHeading: 'ARCHIVES FOR 2026',
        issues: [
            {
                volumeInfo: 'VOL. 8 : ISSUE 5 (May 2026)',
                parts: [
                    { label: 'PART A', slug: '2026.v8.i5.A' },
                    { label: 'PART B', slug: '2026.v8.i5.B' },
                    { label: 'PART C', slug: '2026.v8.i5.C' },
                ]
            },
            {
                volumeInfo: 'VOL. 8 : ISSUE 4 (Apr 2026)',
                parts: [
                    { label: 'PART A', slug: '2026.v8.i4.A' },
                    { label: 'PART B', slug: '2026.v8.i4.B' },
                    { label: 'PART C', slug: '2026.v8.i4.C' },
                ]
            },
            {
                volumeInfo: 'VOL. 8 : ISSUE 3 (Mar 2026)',
                parts: [
                    { label: 'PART A', slug: '2026.v8.i3.A' },
                    { label: 'PART B', slug: '2026.v8.i3.B' },
                ]
            },
            {
                volumeInfo: 'VOL. 8 : ISSUE 2 (Feb 2026)',
                parts: [
                    { label: 'PART A', slug: '2026.v8.i2.A' },
                ]
            },
            {
                volumeInfo: 'VOL. 8 : ISSUE 1 (Jan 2026)',
                parts: [
                    { label: 'PART A', slug: '2026.v8.i1.A' },
                    { label: 'PART B', slug: '2026.v8.i1.B' },
                ]
            }
        ]
    },
    {
        yearHeading: 'ARCHIVES FOR 2025',
        issues: [
            {
                volumeInfo: 'VOL. 7 : ISSUE 2 (Jul-Dec 2025)',
                parts: [
                    { label: 'PART A', slug: '2025.v7.i2.A' },
                    { label: 'PART B', slug: '2025.v7.i2.B' },
                    { label: 'PART C', slug: '2025.v7.i2.C' },
                    { label: 'PART D', slug: '2025.v7.i2.D' },
                    { label: 'PART E', slug: '2025.v7.i2.E' },
                    { label: 'PART F', slug: '2025.v7.i2.F' },
                    { label: 'PART G', slug: '2025.v7.i2.G' },
                    { label: 'PART H', slug: '2025.v7.i2.H' },
                    { label: 'PART I', slug: '2025.v7.i2.I' },
                    { label: 'PART J', slug: '2025.v7.i2.J' },
                ]
            },
            {
                volumeInfo: 'VOL. 7 : ISSUE 1 (Jan-Jun 2025)',
                parts: [
                    { label: 'PART A', slug: '2025.v7.i1.A' },
                    { label: 'PART B', slug: '2025.v7.i1.B' },
                    { label: 'PART C', slug: '2025.v7.i1.C' },
                    { label: 'PART D', slug: '2025.v7.i1.D' },
                    { label: 'PART E', slug: '2025.v7.i1.E' },
                ]
            }
        ]
    }
];

const ArticlesArchiveComponent: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto my-8 px-4 font-sans">
            {/* Top Red-accented Section Header  */}
            <div className="border-b-2 border-red-700 pb-2 mb-8 text-center">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-800 tracking-wide flex items-center justify-center gap-2">
                    <FaArchive className="text-red-700 size-5" /> Archives
                </h2>
            </div>

            {/* Iterating through Year Blocks  */}
            <div className="space-y-8">
                {archiveData.map((group, groupIdx) => (
                    <div
                        key={groupIdx}
                        className="bg-white border border-slate-200 rounded shadow-md overflow-hidden"
                    >
                        {/* Grey Heading Bar representing the Year  */}
                        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 border-t-2 border-t-red-700">
                            <h3 className="text-xs md:text-sm font-bold text-slate-700 tracking-wider font-mono flex items-center gap-2">
                                <FaFolderOpen className="text-slate-500" /> {group.yearHeading}
                            </h3>
                        </div>

                        {/* Issue Selection Rows Area */}
                        <div className="p-4 md:p-6 divide-y divide-slate-100">
                            {group.issues.map((issue, issueIdx) => (
                                <div
                                    key={issueIdx}
                                    className="py-4 first:pt-0 last:pb-0 space-y-3"
                                >
                                    {/* Volume Label Heading  */}
                                    <h4 className="text-xs md:text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
                                        <FaCircleChevronRight className="text-red-700/80 size-3 shrink-0" />
                                        {issue.volumeInfo}
                                    </h4>

                                    {/* Responsive Grid mapping out the Part Anchors  */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pl-4">
                                        {issue.parts.map((part, partIdx) => (
                                            <Link
                                                key={partIdx}
                                                to={`/archives/${part.slug}`}
                                                className="text-[11px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50/40 hover:bg-blue-50 border border-blue-100 hover:border-blue-300 py-1.5 px-3 rounded text-center transition-all duration-150 tracking-wide shadow-sm"
                                            >
                                                {part.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesArchiveComponent;