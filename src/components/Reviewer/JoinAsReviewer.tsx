import React, { useState, useRef } from 'react';
import { FaUserGraduate, FaCloudUploadAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

interface ReviewerRegisterData {
    salutation: string;
    fullName: string;
    designation: string;
    affiliation: string;
    researchExperience: string;
    academicExperience: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobileNumber: string;
    orcidId: string;
    agreeTerms: boolean;
}

const initialFormState: ReviewerRegisterData = {
    salutation: '',
    fullName: '',
    designation: '',
    affiliation: '',
    researchExperience: '',
    academicExperience: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    orcidId: '',
    agreeTerms: false,
};

const JoinAsReviewer: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState<ReviewerRegisterData>(initialFormState);
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof ReviewerRegisterData | 'cvFile', string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name as keyof ReviewerRegisterData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const allowedTypes = ['.doc', '.docx', '.pdf'];
            const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

            if (!allowedTypes.includes(extension)) {
                setErrors(prev => ({ ...prev, cvFile: 'Allowed file types: doc, docx, pdf.' }));
                setCvFile(null);
                return;
            }

            // 1.95 GB max size check (1.95 * 1024 * 1024 * 1024 bytes)
            if (file.size > 1.95 * 1024 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, cvFile: 'Files must be less than 1.95 GB.' }));
                setCvFile(null);
                return;
            }

            setCvFile(file);
            setErrors(prev => ({ ...prev, cvFile: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ReviewerRegisterData | 'cvFile', string>> = {};

        if (!formData.salutation) newErrors.salutation = 'Salutation is required.';
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
        if (!formData.affiliation.trim()) newErrors.affiliation = 'Affiliation is required.';
        if (!formData.researchExperience.trim()) newErrors.researchExperience = 'Research experience is required.';
        if (!formData.academicExperience.trim()) newErrors.academicExperience = 'Academic experience is required.';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'E-mail is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid e-mail address.';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Must be 8-15 characters with uppercase, lowercase, number, and symbol.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        const phoneRegex = /^\d{10}$/;
        if (!formData.mobileNumber) {
            newErrors.mobileNumber = 'Mobile number is required.';
        } else if (!phoneRegex.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile number must be exactly 10 digits.';
        }

        if (!formData.orcidId.trim()) newErrors.orcidId = 'ORCID ID is required.';
        if (!cvFile) newErrors.cvFile = 'Please upload your CV.';
        if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log('Reviewer Registration Submitted:', { ...formData, cvFile });
        alert('Application submitted successfully! The Editorial Board will review your credentials.');
    };

    return (
        <div className="max-w-3xl mx-auto my-10 px-4 font-sans text-slate-800 antialiased">
            {/* Invitation Notice Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 space-y-2 text-xs md:text-sm leading-relaxed text-slate-600">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaUserGraduate className="text-slate-700" /> Join as Reviewer
                </h3>
                <p>
                    Journal Editorial Board is inviting qualified researchers from Pharmaceutical Or Allied Health research areas to apply as honorary peer reviewers to evaluate the manuscript.
                </p>
                <p>
                    Applicants must have adequate experience in the related field after completion and should be willing to complete the review in a timely manner.
                </p>
                <p className="font-semibold text-slate-800 bg-white border border-slate-200/60 p-2.5 rounded inline-block">
                    After successful completion of the peer reviewing process, a certificate will be given to referees.
                </p>
            </div>

            {/* Registration Form Box */}
            <div className="bg-white border border-slate-200 shadow-md rounded-lg p-6 md:p-8">
                <h2 className="text-base font-bold text-slate-900 mb-6 tracking-tight border-b border-slate-100 pb-2 uppercase">
                    Apply as Reviewer
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Salutation Dropdown */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Salutation <span className="text-red-500">*</span></label>
                            <select name="salutation" value={formData.salutation} onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 ${errors.salutation ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`}>
                                <option value="">- Select a value -</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prof.">Prof.</option>
                            </select>
                            {errors.salutation && <p className="text-[10px] text-red-500">{errors.salutation}</p>}
                        </div>

                        {/* Full Name */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.fullName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.fullName && <p className="text-[10px] text-red-500">{errors.fullName}</p>}
                        </div>

                        {/* Designation */}
                        <div className="space-y-1 sm:col-span-2">
                            <label className="font-semibold text-slate-700 block">Designation</label>
                            <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="e.g. Associate Professor"
                                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500" />
                        </div>

                        {/* Affiliation */}
                        <div className="space-y-1 sm:col-span-2">
                            <label className="font-semibold text-slate-700 block">Affiliation <span className="text-red-500">*</span></label>
                            <input type="text" name="affiliation" value={formData.affiliation} onChange={handleChange} placeholder="Institution or organization details"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.affiliation ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.affiliation && <p className="text-[10px] text-red-500">{errors.affiliation}</p>}
                        </div>

                        {/* Research Experience */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Research Experience <span className="text-red-500">*</span></label>
                            <input type="text" name="researchExperience" value={formData.researchExperience} onChange={handleChange} placeholder="e.g. 5 Years"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.researchExperience ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.researchExperience && <p className="text-[10px] text-red-500">{errors.researchExperience}</p>}
                        </div>

                        {/* Academic Experience */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Academic Experience <span className="text-red-500">*</span></label>
                            <input type="text" name="academicExperience" value={formData.academicExperience} onChange={handleChange} placeholder="e.g. 8 Years"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.academicExperience ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.academicExperience && <p className="text-[10px] text-red-500">{errors.academicExperience}</p>}
                        </div>

                        {/* E-mail */}
                        <div className="space-y-1 sm:col-span-2">
                            <label className="font-semibold text-slate-700 block">E-mail <span className="text-red-500">*</span></label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="reviewer@example.com"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                        </div>

                        {/* Password Configuration */}
                        <div className="space-y-1 relative">
                            <label className="font-semibold text-slate-700 block">Password <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Create password"
                                    className={`w-full px-3 py-2 border rounded pr-8 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600">
                                    {showPassword ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-[10px] text-red-500">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Confirm Password <span className="text-red-500">*</span></label>
                            <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Retype password"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.confirmPassword && <p className="text-[10px] text-red-500">{errors.confirmPassword}</p>}
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">Mobile number <span className="text-red-500">*</span></label>
                            <input type="text" name="mobileNumber" maxLength={10} value={formData.mobileNumber} onChange={handleChange} placeholder="10-digit mobile line"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.mobileNumber ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.mobileNumber && <p className="text-[10px] text-red-500">{errors.mobileNumber}</p>}
                        </div>

                        {/* ORCID ID */}
                        <div className="space-y-1">
                            <label className="font-semibold text-slate-700 block">ORCID ID <span className="text-red-500">*</span></label>
                            <input type="text" name="orcidId" value={formData.orcidId} onChange={handleChange} placeholder="0000-0000-0000-0000"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.orcidId ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                            {errors.orcidId && <p className="text-[10px] text-red-500">{errors.orcidId}</p>}
                        </div>

                        {/* CV Upload Element */}
                        <div className="space-y-1 sm:col-span-2">
                            <label className="font-semibold text-slate-700 block">Upload CV <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`flex-1 px-3 py-2 border border-dashed rounded bg-slate-50 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors ${errors.cvFile ? 'border-red-400' : 'border-slate-300'
                                        }`}
                                >
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".doc,.docx,.pdf" />
                                    <FaCloudUploadAlt size={16} className="text-slate-400" />
                                    <span className="text-slate-500 truncate">{cvFile ? cvFile.name : 'Choose file'}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 border border-slate-300 rounded shadow-sm transition-colors"
                                >
                                    Upload
                                </button>
                            </div>
                            <div className="text-[10px] text-slate-400 space-y-0.5 mt-1">
                                <p>Files must be less than 1.95 GB.</p>
                                <p>Allowed file types: <span className="font-mono font-bold">doc docx pdf</span></p>
                            </div>
                            {errors.cvFile && <p className="text-[10px] text-red-500 font-semibold">{errors.cvFile}</p>}
                        </div>
                    </div>

                    {/* Terms Agreement Checkbox Box */}
                    <div className="pt-3 space-y-1">
                        <label className="flex items-center gap-2 text-slate-700 font-medium cursor-pointer select-none">
                            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 size-3.5" />
                            <span>I agree to all the above terms and conditions.</span>
                        </label>
                        {errors.agreeTerms && <p className="text-[10px] text-red-500">{errors.agreeTerms}</p>}
                    </div>

                    {/* Form Submit Button Row */}
                    <div className="pt-2 border-t border-slate-100 flex justify-start">
                        <button
                            type="submit"
                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-300 px-6 py-2 rounded shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinAsReviewer;