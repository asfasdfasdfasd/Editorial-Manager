
import React, { useRef, useState } from 'react';
import { FaFileMedical } from 'react-icons/fa6';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface SubmissionForm {
    name: string;
    designation: string;
    country: string;
    email: string;
    whatsappNumber: string;
    orcidId: string;
    instituteAddress: string;
    manuscriptTitle: string;
    abstract: string;
}

type FormErrors = Partial<
    Record<keyof SubmissionForm | 'researchPaper', string>
>;

const initialFormState: SubmissionForm = {
    name: '',
    designation: '',
    country: '',
    email: '',
    whatsappNumber: '',
    orcidId: '',
    instituteAddress: '',
    manuscriptTitle: '',
    abstract: '',
};

const ManuscriptSubmission: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] =
        useState<SubmissionForm>(initialFormState);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formStatus, setFormStatus] = useState('');

    const abstractWordCount = formData.abstract.trim()
        ? formData.abstract.trim().split(/\s+/).length
        : 0;

    const fieldClass = (error?: string) =>
        `w-full px-3 py-2.5 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 transition-colors ${error
            ? 'border-red-500 focus:ring-red-100'
            : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'
        }`;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        let { value } = e.target;

        // Restrict the abstract to a maximum of 500 words.
        if (name === 'abstract') {
            const words = value.trim() ? value.trim().split(/\s+/) : [];

            if (words.length > 500) {
                value = words.slice(0, 500).join(' ');
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));

        setFormStatus('');
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const allowedFileTypes = /\.(pdf|doc|docx)$/i;

        if (!allowedFileTypes.test(file.name)) {
            setSelectedFile(null);
            setErrors((prev) => ({
                ...prev,
                researchPaper: 'Please upload a PDF, DOC, or DOCX file.',
            }));
            return;
        }

        setSelectedFile(file);

        setErrors((prev) => ({
            ...prev,
            researchPaper: '',
        }));

        setFormStatus('');
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required.';
        }

        if (!formData.designation.trim()) {
            newErrors.designation = 'Designation is required.';
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Country is required.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = 'Email ID is required.';
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address.';
        }

        const phoneRegex = /^\+?\d{10,15}$/;
        const cleanPhone = formData.whatsappNumber.replace(/[\s()-]/g, '');

        if (!cleanPhone) {
            newErrors.whatsappNumber = 'WhatsApp number is required.';
        } else if (!phoneRegex.test(cleanPhone)) {
            newErrors.whatsappNumber = 'Please enter a valid WhatsApp number with country code.';
        }

        const orcidRegex = /^\d{4}-\d{4}-\d{4}-\d{3}[0-9X]$/;

        if (!formData.orcidId.trim()) {
            newErrors.orcidId = 'ORCID ID is required.';
        } else if (!orcidRegex.test(formData.orcidId.trim())) {
            newErrors.orcidId = 'Invalid format. Example: 0000-0002-1825-0097';
        }

        if (!formData.instituteAddress.trim()) {
            newErrors.instituteAddress = 'Institute address is required.';
        }

        if (!formData.manuscriptTitle.trim()) {
            newErrors.manuscriptTitle = 'Manuscript title is required.';
        }

        if (!selectedFile) {
            newErrors.researchPaper = 'Please upload your research paper.';
        }

        if (!formData.abstract.trim()) {
            newErrors.abstract = 'Abstract is required.';
        } else if (abstractWordCount > 500) {
            newErrors.abstract = 'Abstract cannot exceed 500 words.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('');

        if (!validateForm()) return;

        // Backend/API integration is required to actually submit the paper.
        console.log('Validated manuscript submission:', {
            ...formData,
            researchPaper: selectedFile,
        });

        setFormStatus(
            'Your form has passed validation. The manuscript submission service still needs to be connected to receive and store your paper.'
        );
    };

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto my-8 px-4 font-sans">

                {/* Page Header */}
                <div className="border-b-2 border-red-700 pb-3 mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight flex items-center gap-2">
                        <FaFileMedical className="text-blue-600" />
                        Manuscript Submission
                    </h2>
                </div>

                {/* Submission Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-slate-200 shadow-lg rounded-xl p-5 md:p-8 space-y-5 text-sm"
                >

                    {/* Full Name and Designation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                Full Name <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={fieldClass(errors.name)}
                            />

                            {errors.name && (
                                <p className="text-xs text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                Designation <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                placeholder="e.g. Professor, Research Scholar, Student"
                                className={fieldClass(errors.designation)}
                            />

                            {errors.designation && (
                                <p className="text-xs text-red-500">{errors.designation}</p>
                            )}
                        </div>
                    </div>

                    {/* Country and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                Country <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="country"
                                value={"India"}
                                readOnly
                                onChange={handleChange}
                                placeholder="Enter your country"
                                className={fieldClass(errors.country)}
                            />

                            {errors.country && (
                                <p className="text-xs text-red-500">{errors.country}</p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                Email ID <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                className={fieldClass(errors.email)}
                            />

                            {errors.email && (
                                <p className="text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    {/* WhatsApp and ORCID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                Whatsapp Number <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="tel"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                placeholder="Include country code"
                                className={fieldClass(errors.whatsappNumber)}
                            />

                            {errors.whatsappNumber && (
                                <p className="text-xs text-red-500">
                                    {errors.whatsappNumber}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 block">
                                ORCID ID <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="orcidId"
                                value={formData.orcidId}
                                onChange={handleChange}
                                placeholder="0000-0002-1825-0097"
                                className={fieldClass(errors.orcidId)}
                            />

                            {errors.orcidId && (
                                <p className="text-xs text-red-500">{errors.orcidId}</p>
                            )}
                        </div>
                    </div>

                    {/* Institute Address */}
                    <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 block">
                            Institute Address <span className="text-red-500">*</span>
                        </label>

                        <textarea
                            name="instituteAddress"
                            rows={3}
                            value={formData.instituteAddress}
                            onChange={handleChange}
                            placeholder="Enter your complete institute/organization address"
                            className={fieldClass(errors.instituteAddress)}
                        />

                        {errors.instituteAddress && (
                            <p className="text-xs text-red-500">
                                {errors.instituteAddress}
                            </p>
                        )}
                    </div>

                    {/* Manuscript Title */}
                    <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 block">
                            Manuscript Title <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="manuscriptTitle"
                            value={formData.manuscriptTitle}
                            onChange={handleChange}
                            placeholder="Enter the complete title of your research paper"
                            className={fieldClass(errors.manuscriptTitle)}
                        />

                        {errors.manuscriptTitle && (
                            <p className="text-xs text-red-500">
                                {errors.manuscriptTitle}
                            </p>
                        )}
                    </div>

                    {/* Research Paper Upload */}
                    <div className="space-y-2">
                        <label className="font-semibold text-slate-700 block">
                            Upload Your Research Paper <span className="text-red-500">*</span>
                        </label>

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2 group ${errors.researchPaper
                                    ? 'border-red-400 bg-red-50/30'
                                    : 'border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-blue-400'
                                }`}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                            />

                            <FaCloudUploadAlt
                                size={32}
                                className="text-slate-400 group-hover:text-blue-600 transition-colors"
                            />

                            <span className="font-semibold text-slate-600">
                                Click to upload your research paper
                            </span>

                            <span className="text-xs text-slate-400">
                                Supported formats: PDF, DOC, DOCX
                            </span>
                        </div>

                        {selectedFile && (
                            <div className="flex items-center justify-between gap-3 bg-blue-50 border border-blue-100 rounded-md p-3">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-blue-800 truncate">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-[11px] text-slate-500">
                                        {(selectedFile.size / 1024).toFixed(1)} KB
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedFile(null);
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = '';
                                        }
                                    }}
                                    className="text-xs text-red-600 hover:text-red-800 font-semibold shrink-0"
                                >
                                    Remove
                                </button>
                            </div>
                        )}

                        {errors.researchPaper && (
                            <p className="text-xs text-red-500">
                                {errors.researchPaper}
                            </p>
                        )}
                    </div>

                    {/* Abstract */}
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-3">
                            <label className="font-semibold text-slate-700 block">
                                Abstract <span className="text-red-500">*</span>
                            </label>

                            <span
                                className={`text-xs font-medium ${abstractWordCount >= 500
                                        ? 'text-red-600'
                                        : 'text-slate-400'
                                    }`}
                            >
                                {abstractWordCount}/500 words
                            </span>
                        </div>

                        <textarea
                            name="abstract"
                            rows={8}
                            value={formData.abstract}
                            onChange={handleChange}
                            placeholder="Write your manuscript abstract here (maximum 500 words)..."
                            className={`${fieldClass(errors.abstract)} resize-y`}
                        />

                        <p className="text-xs text-slate-400">
                            Please provide a clear summary of your research, including its
                            purpose, methodology, key findings, and conclusion. Maximum 500
                            words.
                        </p>

                        {errors.abstract && (
                            <p className="text-xs text-red-500">{errors.abstract}</p>
                        )}
                    </div>

                    {/* Submission Status */}
                    {formStatus && (
                        <div className="p-3 rounded-md border border-amber-200 bg-amber-50 text-amber-800 text-xs leading-relaxed">
                            {formStatus}
                        </div>
                    )}

                    {/* Submit Button - At the End */}
                    <div className="pt-4 border-t border-slate-100 flex justify-start">
                        <button
                            type="submit"
                            className="px-8 py-2.5 rounded-md text-white font-semibold shadow-sm transition-colors bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>

            <Footer />
        </>
    );
};

export default ManuscriptSubmission;
