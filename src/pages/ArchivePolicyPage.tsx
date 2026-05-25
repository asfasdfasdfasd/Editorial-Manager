import React from 'react';
import { FaBoxArchive } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArchivePolicyPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto my-10 px-4 font-sans text-slate-700 antialiased leading-relaxed">

                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaBoxArchive className="text-slate-600 size-6" /> Archiving and Indexing Policy
                    </h1>
                </div>

                {/* Archiving Policy */}
                <section className="mb-10">
                    <p className="text-[13px] text-slate-600 leading-relaxed">
                        The journal will ensure long-term preservation of all published research articles, special issues, and related content through available archiving facilities. The journal will be utilized DATA STORE services for systematic storage and maintenance of published materials. The journal permits to archiving and storage of published articles by individuals, academic institutions, organizations, and other entities. However, such use must be strictly complying with the terms and conditions of the journal. Proper citation of the original publication and due acknowledgment of the authors are mandatory in all cases. The publisher reserves the right to modify or update journal-related details displayed on article pages as deemed necessary.
                    </p>
                </section>

                {/* Indexing of Published Articles */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                        Indexing of Published Articles
                    </h2>
                    <p className="text-[13px] text-slate-600 leading-relaxed">
                        Authors are strongly encouraged to independently index and showcase their published work on recognized academic platforms such as Google Scholar, Publons, ResearchGate, Academia.edu, and other similar repositories to enhance the visibility and impact of their research. This self-indexing should be carried out through the author's personal profile on these platforms. The journal do not assume any responsibility for indexing on third-party websites, as these platforms operate independently and are beyond the control or domain of the journal.
                    </p>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default ArchivePolicyPage;
