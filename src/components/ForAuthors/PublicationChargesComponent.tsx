import React from 'react';

const PublicationChargesComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
      {/* Main Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          Article Publication Charges
        </h1>
      </div>

      {/* Content Container Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

        {/* Mission and Scope Overview */}
        <div className="space-y-4">
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            An <strong>Article Publication Charge (APC)</strong> is a fee to be charged to authors to make their work available as open access. This charge may be paid by the either author’s or the author’s institution or their research funder. APCs charges that cover the costs for publication process, editorial handling, peer review administration, copy and layout editing, long term archiving and journal hosting the final article on dedicated servers. Editorial board decisions will be independently of the author’s ability to pay, and any fee waiver or discount request does not influence peer review and acceptance decisions.
          </p>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600 pt-4 border-t border-slate-100">
            When submitting a manuscript, the submitting author must indicate that the corresponding author for paying the publication charge and any other eligible wavier. After acceptance of the article, the corresponding author will be asked to sign a license and make payment as applicable. The corresponding author responsibility is to pay the article publication charge and the journal will not issue refunds for any reason.
          </p>
        </div>



      </div>
    </div>
  );
};

export default PublicationChargesComponent;