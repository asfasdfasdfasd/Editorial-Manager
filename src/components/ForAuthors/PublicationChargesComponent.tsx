
import React from 'react';

const PublicationChargesComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">

      {/* Main Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Article Publication Charges
        </h1>
      </div>

      {/* Content Container */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-7 shadow-sm">

        {/* Introduction */}
        <div>
          <p className="text-xs md:text-sm text-justify leading-relaxed text-slate-600">
            Journal of Advanced Pharmaceutical and Health Sciences Education
            & Research publish all manuscripts as a fully open access i.e.
            free access to readers. The Article Publication Charges (APC)
            cover the fees of peer-review, copy editing, typesetting,
            publication certificate, long term archiving on server, sharing
            of articles, Indexing with various databases and journal
            management. An article publication charges are applicable to
            accepted papers only. The corresponding author responsibility
            is to pay the article publication charge and the journal will
            not issue refunds for any reason.
          </p>
        </div>

        {/* Submission and Processing Charges */}
        <div>
          <h2 className="text-sm md:text-base font-bold text-slate-900">
            Article Submission & Processing Charges – Nil
          </h2>
        </div>

        {/* Article Publication Charges */}
        <div className="space-y-4">
          <h2 className="text-sm md:text-base font-bold text-slate-900">
            Article Publication Charges (APC) are given below:
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-800 text-xs md:text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-800 px-3 py-2 text-left font-bold text-slate-900">
                    Type
                  </th>
                  <th className="border border-slate-800 px-3 py-2 text-left font-bold text-slate-900">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-slate-800 px-3 py-3 text-slate-700">
                    Article Publication Charges
                  </td>
                  <td className="border border-slate-800 px-3 py-3 text-slate-700">
                    Rs. 3,000/- (Including 18% GST)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900">Note:</strong> If article is
            accepted for publication, the corresponding author will be asked
            to make payment as applicable.
          </p>
        </div>

        {/* Payment Details */}
        <div className="space-y-3">
          <h2 className="text-sm md:text-base font-bold text-slate-900">
            Payment Details:-
          </h2>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            Payment through NEFT/RTGS will be made in the account of Swami
            Vivekanand College of Pharmacy are as follows:
          </p>

          <div className="space-y-2 text-xs md:text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">Bank Name:</strong>{' '}
              Union Bank of India
            </p>

            <p>
              <strong className="text-slate-900">Branch:</strong>{' '}
              Sector 40 C, Chandigarh
            </p>

            <p>
              <strong className="text-slate-900">Account No:</strong>{' '}
              504701010102527
            </p>

            <p>
              <strong className="text-slate-900">IFSC Code:</strong>{' '}
              UBIN0550477
            </p>

            <p>
              Please send your payment details at{' '}
              <a
                href="mailto:ejournal@svcp.org.in"
                className="text-blue-700 underline hover:text-blue-900"
              >
                ejournal@svcp.org.in
              </a>
            </p>
          </div>
        </div>

        {/* Fee Waivers */}
        <div className="space-y-3">
          <h2 className="text-sm md:text-base font-bold text-slate-900">
            Fee Waivers
          </h2>

          <p className="text-xs text-justify md:text-sm leading-relaxed text-slate-600">
            Full or partial APC waivers are available for authors from low
            income background, recent postgraduate students, journal
            members and collaborating organizations. Authors experiencing
            financial need may apply for optional fee waivers which will be
            assessed independently of editorial decisions to maintain
            integrity of the peer review process. Fee waiver requests made
            during the review process or after acceptance for publication
            will not be considered.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-3 pt-5 border-t border-slate-100">
          <h2 className="text-sm md:text-base font-bold text-slate-900">
            Contact Details
          </h2>

          <div className="space-y-2 text-xs md:text-sm text-slate-600">
            <p className="font-medium text-slate-900">
              Swami Vivekanand College of Pharmacy (SVCP)
            </p>

            <p className="leading-relaxed">
              Chandigarh-Patiala National Highway, Village-Ramnagar Near
              Banur, Tehsil-Rajpura, District-Patiala, Punjab-140601
            </p>

            <p>
              <strong className="text-slate-900">Mobile:</strong>{' '}
              <a
                href="tel:+918219420220"
                className="text-blue-700 hover:text-blue-900"
              >
                +91-82194-20220
              </a>
            </p>

            <p>
              <strong className="text-slate-900">Website:</strong>{' '}
              <a
                href="https://www.svcp.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                www.svcp.org.in
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PublicationChargesComponent;
