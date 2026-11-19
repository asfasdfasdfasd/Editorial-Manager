
import React from 'react';
import {  FaFolderOpen, FaCircleChevronRight } from 'react-icons/fa6';
import { FaArchive } from 'react-icons/fa';
interface ArchiveIssue {
    title: string;
    papers: string[];
}

interface ArchiveVolume {
    title: string;
    issues: ArchiveIssue[];
}

const archiveData: ArchiveVolume[] = [
    {
        title: 'Volume-1 | 2026',
        issues: [
            {
                title: 'Volume 1 | Issue-1 (July–December)',
                papers: [],
            },
        ],
    },
];

const ArticlesArchiveComponent: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto my-8 px-4 font-sans">

            {/* Page Header */}
            <div className="border-b-2 border-red-700 pb-2 mb-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-wide flex items-center justify-center gap-2">
                    <FaArchive className="text-red-700 size-5" />
                    Archives
                </h2>
            </div>

            {/* Archive Volumes */}
            <div className="space-y-6">
                {archiveData.map((volume, volumeIdx) => (
                    <div
                        key={volumeIdx}
                        className="bg-white border border-slate-200 rounded shadow-md overflow-hidden"
                    >
                        {/* Volume Heading */}
                        <div className="bg-slate-100 border-b border-slate-200 border-t-2 border-t-red-700 px-4 py-3">
                            <h3 className="text-sm md:text-base font-bold text-slate-700 tracking-wide flex items-center gap-2">
                                <FaFolderOpen className="text-slate-500" />
                                {volume.title}
                            </h3>
                        </div>

                        {/* Issues */}
                        <div className="p-4 md:p-6 space-y-4">
                            {volume.issues.map((issue, issueIdx) => (
                                <div
                                    key={issueIdx}
                                    className="border border-slate-200 rounded-md p-4"
                                >
                                    <h4 className="text-xs md:text-sm font-bold text-slate-800 flex items-center gap-2">
                                        <FaCircleChevronRight className="text-red-700 size-3 shrink-0" />
                                        {issue.title}
                                    </h4>

                                    {/* Papers will be added here after publication */}
                                    {issue.papers.length > 0 ? (
                                        <div className="mt-4 space-y-2 pl-5">
                                            {issue.papers.map((paper, paperIdx) => (
                                                <div
                                                    key={paperIdx}
                                                    className="text-xs md:text-sm text-slate-700"
                                                >
                                                    {paper}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="mt-3 pl-5 text-xs text-slate-400 italic">
                                            Papers will be added after publication.
                                        </p>
                                    )}
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
