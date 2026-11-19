
import React from 'react';
import { FaBookOpen } from 'react-icons/fa6';

const journalParticulars = [
  {
    title: 'Title',
    value:
      'Journal of Advanced Pharmaceutical and Health Sciences Education & Research (JAPHSER)',
  },
  { title: 'Frequency', value: 'Biannual' },
  { title: 'e-ISSN', value: 'e-XXXX-XXXX' },
  { title: 'Publisher', value: 'Swami Vivekanand College of Pharmacy' },
  { title: 'Chief Editor', value: 'Dr. Manish Goswami (Principal)' },
  { title: 'Copyright', value: 'Swami Vivekanand College of Pharmacy' },
  { title: 'Starting year', value: '2026' },
  { title: 'Subject', value: 'Multidisciplinary' },
  { title: 'Language', value: 'English' },
  { title: 'Publication format', value: 'Online' },
  { title: 'Email Id', value: 'principal@svcp.org.in', type: 'email' },
  {
    title: 'Mobile No.',
    value: '+91-98722-62777, +91-99141-00231',
  },
  { title: 'Website', value: 'www.svcp.org.in', type: 'website' },
  {
    title: 'Address',
    value:
      'Chandigarh-Patiala National Highway, Village-Ramnagar Near Banur, Tehsil-Rajpura, District-Patiala, Punjab-140601',
  },
];

const JournalInformationComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
      {/* Main Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FaBookOpen className="text-slate-700 size-7" />
          About the Journal
        </h1>
      </div>

      {/* Content Container Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

        {/* Mission and Scope Overview */}
        <div className="space-y-4">
          <p className="text-xs md:text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900 font-semibold">
              Journal of Advanced Pharmaceutical and Health Sciences Education & Research (JAPHSER)
            </strong>{' '}
            is an open access, multidisciplinary, peer-reviewed referred journal dedicated to the advancement of pharmaceutical and Health Sciences. The purpose of journal is to provide a national platform for researchers, academicians, healthcare professionals, pharmacists and students to publish innovative scientific findings and evidence based practices.
          </p>

          <p className="text-xs md:text-sm leading-relaxed text-slate-600 pt-4 border-t border-slate-100">
            The journal aims to promote advancement in pharmaceutical and health sciences through the publication of original research articles, review papers, etc. The journal encourages multidisciplinary research that bridges the gap between pharmaceutical sciences, clinical practice, healthcare education and public health.
          </p>
        </div>

        {/* Journal Particulars Table */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-bold text-slate-900 mb-3">
            Journal Particulars
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse border border-slate-800 text-xs md:text-sm">
              <tbody>
                {journalParticulars.map((item, index) => (
                  <tr key={index}>
                    <th
                      scope="row"
                      className="w-1/4 border border-slate-800 px-3 py-2 text-center font-semibold text-slate-900 align-middle"
                    >
                      {item.title}
                    </th>

                    <td className="border border-slate-800 px-3 py-2 text-center text-slate-700 align-middle">
                      {item.type === 'email' ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-blue-700 underline hover:text-blue-900"
                        >
                          {item.value}
                        </a>
                      ) : item.type === 'website' ? (
                        <a
                          href="https://www.svcp.org.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline hover:text-blue-900"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JournalInformationComponent;
