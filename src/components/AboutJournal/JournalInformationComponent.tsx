import React from 'react';
import { FaBookOpen, FaCircleInfo } from 'react-icons/fa6';

const JournalInformationComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
      {/* Main Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FaBookOpen className="text-slate-700 size-7" /> About the Journal
        </h1>
      </div>

      {/* Content Container Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

        {/* Mission and Scope Overview */}
        <div className="space-y-4">
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            The <strong className="text-slate-900 font-semibold">Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER)</strong> is a multidisciplinary peer reviewed academic and research journal committed to publishing high quality research in the fields of pharmaceutical sciences, health sciences, and healthcare research. The purpose of journal is to provide a national platform for researchers, academicians, healthcare professionals, pharmacists and students to publish innovative scientific findings and evidence based practices.
          </p>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600 pt-4 border-t border-slate-100">
            The Journal of Advanced Pharmaceutical and Health Sciences Education and Research focusing on advancing knowledge in pharmaceutical and health sciences through the publication of original research articles, review papers, case. The journal encourages multidisciplinary research that bridges the gap between pharmaceutical sciences, clinical practice, healthcare education, and public health.
          </p>
        </div>

        {/* Subdued Focus Highlight Box for Visual Layout Balance */}
        <div className="bg-slate-50 border border-slate-150 rounded-md p-4 flex gap-3 text-xs text-slate-500 leading-normal">
          <FaCircleInfo className="text-slate-400 size-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-700 block mb-0.5">Core Publication Formats</span>
            <p>Accepting original research metrics, critical analytical reviews, and clinical case studies spanning cross-functional healthcare domains.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JournalInformationComponent;