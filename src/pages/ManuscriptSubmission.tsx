import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaFileMedical, FaFileExcel } from 'react-icons/fa6';
import { FaCheckCircle, FaCloudUploadAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
interface SubmissionForm {
    name: string;
    email: string;
    country: string;
    whatsappNumber: string;
    instituteAddress: string;
    manuscriptTitle: string;
    orcidId: string;
}

const initialFormState: SubmissionForm = {
    name: '',
    email: '',
    country: '',
    whatsappNumber: '',
    instituteAddress: '',
    manuscriptTitle: '',
    orcidId: '',
};

const ManuscriptSubmission: React.FC = () => {
    // const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState<SubmissionForm>(initialFormState);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [errors, setErrors] = useState<Partial<Record<keyof SubmissionForm | 'files', string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [generatedRefNum, setGeneratedRefNum] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof SubmissionForm]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFiles(e.target.files);
            setErrors(prev => ({ ...prev, files: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof SubmissionForm | 'files', string>> = {};

        if (!formData.name.trim()) newErrors.name = 'Author name is required.';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email address is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.country) newErrors.country = 'Please select your country.';

        const phoneRegex = /^\d{10,13}$/; // Flexible for country codes, minimum 10 digits
        if (!formData.whatsappNumber) {
            newErrors.whatsappNumber = 'WhatsApp number is required.';
        } else if (!phoneRegex.test(formData.whatsappNumber.replace(/[-+ ]/g, ''))) {
            newErrors.whatsappNumber = 'Please enter a valid contact number.';
        }

        if (!formData.instituteAddress.trim()) newErrors.instituteAddress = 'Institute address is required.';
        if (!formData.manuscriptTitle.trim()) newErrors.manuscriptTitle = 'Manuscript title is required.';

        const orcidRegex = /^\d{4}-\d{4}-\d{4}-\d{3}[0-9X]$/;
        if (!formData.orcidId) {
            newErrors.orcidId = 'ORCID ID is required.';
        } else if (!orcidRegex.test(formData.orcidId.trim())) {
            newErrors.orcidId = 'Invalid format. Example: 0000-0002-1825-0097';
        }

        if (!selectedFiles || selectedFiles.length === 0) {
            newErrors.files = 'Please upload at least one manuscript file.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulating Backend Pipeline: Saving paper and generating reference number 
        setTimeout(() => {
            const platformCode = 'JAMP';
            const randomId = Math.floor(1000 + Math.random() * 9000);
            const refNumber = `${platformCode}-2026-${randomId}`; // Generated 2026 timeline reference [cite: 13, 20]

            setGeneratedRefNum(refNumber);
            setIsSubmitting(false);
            console.log('Manuscript Stored secure database path sequence configured.', { ...formData, files: selectedFiles, referenceNumber: refNumber });
        }, 1500);
    };

    // Simulated Export Option Pipeline 
    const triggerExcelGeneration = () => {
        alert('Generating manuscript records excel spreadsheet stream (.xlsx)...');
        console.log('Excel report compiled across active data matrices.');
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto my-8 px-4 font-sans">
                {/* Header Title Section  */}
                <div className="border-b-2 border-red-700 pb-2 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight flex items-center gap-2">
                        <FaFileMedical className="text-blue-600" /> Manuscript Submission
                    </h2>
                    {/* Excel Report Generator Trigger  */}
                    <button
                        type="button"
                        onClick={triggerExcelGeneration}
                        className="flex items-center gap-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1.5 rounded shadow-sm transition-colors"
                    >
                        <FaFileExcel /> Export to Excel
                    </button>
                </div>

                {/* Success Notification Window displaying reference details  */}
                {generatedRefNum ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 md:p-8 text-center space-y-4 shadow-sm animate-fadeIn">
                        <div className="flex justify-center text-emerald-500">
                            <FaCheckCircle size={48} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold text-slate-900">Manuscript Submitted Successfully!</h3>
                            <p className="text-sm text-slate-600">Your research data and files have been securely indexed inside our database portal.</p>
                        </div>
                        <div className="bg-white border border-emerald-100 rounded-lg py-3 px-6 inline-block shadow-inner">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Article Reference Number</span>
                            <span className="text-lg font-mono font-bold text-emerald-700 tracking-wide">{generatedRefNum}</span>
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={() => {
                                    setGeneratedRefNum(null);
                                    setFormData(initialFormState);
                                    setSelectedFiles(null);
                                }}
                                className="text-xs bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
                            >
                                Submit Another Document
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Primary Application Submission Container Grid  */
                    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 shadow-xl rounded-xl p-6 md:p-8 space-y-5 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name Field  */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email Field  */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                            </div>

                            {/* Country Selection Dropdown  */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Country <span className="text-red-500">*</span></label>
                                <select name="country" value={formData.country} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 ${errors.country ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`}>
                                    <option value="">Select country</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                                {errors.country && <p className="text-[10px] text-red-500">{errors.country}</p>}
                            </div>

                            {/* WhatsApp Number  */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Whatsapp Number <span className="text-red-500">*</span></label>
                                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="WhatsApp number with country code"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.whatsappNumber ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.whatsappNumber && <p className="text-[10px] text-red-500">{errors.whatsappNumber}</p>}
                            </div>

                            {/* New Integrated Requirement Layer: ORCID ID Input Block  */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">ORCID ID <span className="text-red-500">*</span></label>
                                <input type="text" name="orcidId" value={formData.orcidId} onChange={handleChange} placeholder="0000-0000-0000-0000"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.orcidId ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                <p className="text-[10px] text-slate-400">Provide your 16-digit structure open contributor ORCID identification key[cite: 12].</p>
                                {errors.orcidId && <p className="text-[10px] text-red-500">{errors.orcidId}</p>}
                            </div>

                            {/* Institute Address Textarea  */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">Institute Address <span className="text-red-500">*</span></label>
                                <textarea name="instituteAddress" rows={4} value={formData.instituteAddress} onChange={handleChange} placeholder="Full address tracking lines of your official medical/academic department institution setup"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.instituteAddress ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`}></textarea>
                                {errors.instituteAddress && <p className="text-[10px] text-red-500">{errors.instituteAddress}</p>}
                            </div>

                            {/* Manuscript Title Field  */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">Manuscript Title <span className="text-red-500">*</span></label>
                                <input type="text" name="manuscriptTitle" value={formData.manuscriptTitle} onChange={handleChange} placeholder="Enter complete manuscript title heading"
                                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.manuscriptTitle ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.manuscriptTitle && <p className="text-[10px] text-red-500">{errors.manuscriptTitle}</p>}
                            </div>

                            {/* File Upload Component  */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">File (Choose one or more files) <span className="text-red-500">*</span></label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2 group bg-slate-50 hover:bg-slate-100/70 ${errors.files ? 'border-red-400 bg-red-50/10' : 'border-slate-300 hover:border-blue-400'
                                        }`}
                                >
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple className="hidden" />
                                    <FaCloudUploadAlt size={28} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                    <span className="font-medium text-slate-600">Click to browse or drop items files directly</span>
                                    <span className="text-[10px] text-slate-400">Supports multi-document structural uploads simultanously (.pdf, .doc, .docx)</span>
                                </div>

                                {/* Render lists containing target file names */}
                                {selectedFiles && selectedFiles.length > 0 && (
                                    <div className="bg-slate-100 border border-slate-200 rounded p-2.5 mt-2 space-y-1.5">
                                        <p className="font-semibold text-slate-700 border-b border-slate-200 pb-1">Selected Files ({selectedFiles.length}):</p>
                                        <ul className="space-y-1">
                                            {Array.from(selectedFiles).map((file, i) => (
                                                <li key={i} className="text-slate-600 font-mono text-[10px] flex items-center gap-1.5 truncate">
                                                    <span className="text-blue-600 font-bold">[{i + 1}]</span> {file.name}
                                                    <span className="text-slate-400 text-[9px]">({(file.size / 1024).toFixed(1)} KB)</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {errors.files && <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.files}</p>}
                            </div>
                        </div>

                        {/* Submit Interactive Button Option Block  */}
                        <div className="pt-2 border-t border-slate-100 flex justify-start">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-2 rounded text-white font-semibold shadow transition-colors flex items-center gap-2 focus:outline-none ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                {isSubmitting ? 'Processing Submission...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ManuscriptSubmission;