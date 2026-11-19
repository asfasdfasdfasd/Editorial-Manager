
import { FaCircleInfo } from 'react-icons/fa6';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CopyrightForm = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
                {/* Main Header */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaCircleInfo className="text-slate-700 size-7" /> Copyright
                    </h1>
                </div>

                {/* Content Container Card */}
                <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                    {/* Mission and Scope Overview */}
                    <div className="space-y-4">
                        <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                            During the submission of manuscript, corresponding author will be required complete and submit the applicable Copyright Agreement Form.
                        </p>

                        <p className="text-xs md:text-sm leading-relaxed text-slate-600 pt-4 ">
                            Authors are solely responsible for obtaining written permission from the respective copyright holders for the reproduction or use of any copyrighted material included in their manuscripts.
                        </p>
                    </div>

                    {/* Subdued Focus Highlight Box for Visual Layout Balance */}
                    <a
                        href="/Copyright agreement form.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline font-medium"
                    >
                        Read full copyright PDF from here
                    </a>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default CopyrightForm