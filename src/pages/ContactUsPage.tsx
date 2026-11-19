
import {
    FaAddressCard,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaGlobe
} from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">

                {/* Main Header */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        <FaAddressCard className="text-slate-700 size-7" />
                        Contact Us
                    </h1>
                </div>

                {/* Contact Information Card */}
                <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">

                    <h2 className="text-base font-bold text-slate-900">
                        Swami Vivekanand College of Pharmacy
                    </h2>

                    {/* Address */}
                    <div className="flex gap-4 items-start">
                        <FaLocationDot className="text-slate-500 size-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 mb-1">
                                Address
                            </h3>
                            <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                                Chandigarh-Patiala National Highway,
                                Village-Ramnagar Near Banur,
                                Tehsil-Rajpura, District-Patiala,
                                Punjab-140601
                            </p>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="flex gap-4 items-start">
                        <FaPhone className="text-slate-500 size-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 mb-1">
                                Mobile
                            </h3>
                            <a
                                href="tel:+918219420220"
                                className="text-xs md:text-sm text-blue-600 hover:underline"
                            >
                                +91-82194-20220
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start">
                        <FaEnvelope className="text-slate-500 size-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 mb-1">
                                Email
                            </h3>
                            <a
                                href="mailto:ejournal@svcp.org.in"
                                className="text-xs md:text-sm text-blue-600 hover:underline"
                            >
                                ejournal@svcp.org.in
                            </a>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="flex gap-4 items-start">
                        <FaGlobe className="text-slate-500 size-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 mb-1">
                                Website
                            </h3>
                            <a
                                href="https://www.svcp.org.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-blue-600 hover:underline"
                            >
                                www.svcp.org.in
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
