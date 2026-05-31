import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaArrowLeft, FaAward, FaBookOpen } from 'react-icons/fa6';

interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    speciality: string;
    password: string;
    phone: string;
    orcidId: string;
    affiliation: string;
    department: string;
    country: string;
    city: string;
    rememberMe: boolean;
}

const initialFormData: FormData = {
    email: '',
    firstName: '',
    lastName: '',
    speciality: '',
    password: '',
    phone: '',
    orcidId: '',
    affiliation: '',
    department: '',
    country: '',
    city: '',
    rememberMe: false,
};

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<1 | 2>(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    // Input Change Handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        // Clear error dynamically as user types
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // Step 1 Validation (Email Screening)
    const handleStep1Submit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email address is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid academic or professional email.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setStep(2);
        }
    };

    // Step 2 Validation & Final Submission
    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        // Required field validations
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!formData.speciality) newErrors.speciality = 'Please select your medical/pharmacy speciality.';
        if (!formData.affiliation.trim()) newErrors.affiliation = 'Institution affiliation is required.';
        if (!formData.department.trim()) newErrors.department = 'Department / Specialization details are required.';
        if (!formData.country) newErrors.country = 'Please select your country.';
        if (!formData.city.trim()) newErrors.city = 'City name is required.';
        if (!formData.orcidId.trim()) newErrors.orcidId = 'ORCID ID is required for academic submissions.';

        // Strict Mobile Validation (Exactly 10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Mobile number must be exactly 10 digits.';
        }

        // Strict Password Validation (8-15 characters, lowercase, uppercase, digit, symbol)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Must be 8-15 characters with uppercase, lowercase, number, and special character.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // Scroll to top of the form panel to show errors
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Log final sanitized data payload
            console.log('Registration Submitted Successfully:', formData);
            alert('Account created successfully! Redirecting...');
            navigate('/login');
        }
    };

    return (
        <div className=" my-10 flex items-center justify-center p-4 md:p-8 font-sans">
            {/* Step 1: Clean Screening Container */}
            {step === 1 && (
                <div className="w-full max-w-md bg-white border border-slate-200 shadow-xl rounded-xl p-6 md:p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                            Sign Up for Journal 
                        </h2>
                        <p className="text-xs text-slate-500">
                            Enter your email credentials to initialize verification.
                        </p>
                    </div>

                    <form onSubmit={handleStep1Submit} className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-xs font-semibold text-slate-700 block">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email id"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 text-sm border bg-slate-50 rounded-md focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'
                                    }`}
                            />
                            {errors.email && <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>}
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => navigate('/')}
                                className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="border-t border-slate-100 pt-4 text-center">
                        <p className="text-xs text-slate-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            )}

            {/* Step 2: Split-Screen Academic Registration Layout */}
            {step === 2 && (
                <div className="w-full max-w-5xl bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[650px]">
                    {/* Left Panel: Detailed Registration Form */}
                    <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
                        <div>
                            <button
                                onClick={() => setStep(1)}
                                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors mb-4"
                            >
                                <FaArrowLeft size={10} /> Back to step 1
                            </button>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                                Create a new Account
                            </h2>
                            <p className="text-xs text-slate-400 mt-0.5">Please map out all relevant professional details profile configuration.</p>
                        </div>

                        <form onSubmit={handleFinalSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 text-xs">
                            {/* First Name */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">First Name <span className="text-red-500">*</span> </label>
                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.firstName && <p className="text-[10px] text-red-500">{errors.firstName}</p>}
                            </div>

                            {/* Last Name */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Last Name <span className="text-red-500">*</span> </label>
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.lastName && <p className="text-[10px] text-red-500">{errors.lastName}</p>}
                            </div>

                            {/* Speciality */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">Speciality <span className="text-red-500">*</span> </label>
                                <select name="speciality" value={formData.speciality} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 ${errors.speciality ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`}>
                                    <option value="">Select Speciality</option>
                                    <option value="Pharmaceutics">Pharmaceutics</option>
                                    <option value="Pharmacology">Pharmacology</option>
                                    <option value="General Medicine">General Medicine</option>
                                    <option value="Clinical Pharmacy">Clinical Pharmacy</option>
                                </select>
                                {errors.speciality && <p className="text-[10px] text-red-500">{errors.speciality}</p>}
                            </div>

                            {/* Email Address (ReadOnly from step 1) */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-400 block">Email Id (Verified) </label>
                                <input type="email" name="email" value={formData.email} readOnly
                                    className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-100 text-slate-500 cursor-not-allowed outline-none" />
                            </div>

                            {/* Strict Password with Show/Hide Toggle */}
                            <div className="space-y-1 relative">
                                <label className="font-semibold text-slate-700 block">Password <span className="text-red-500">*</span> </label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange}
                                        className={`w-full px-3 py-2 border rounded-md pr-9 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors">
                                        {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                                    </button>
                                </div>
                                {errors.password ? (
                                    <p className="text-[10px] text-red-500 leading-tight">{errors.password}</p>
                                ) : (
                                    <p className="text-[10px] text-slate-400 leading-tight">8-15 characters (A-Z, a-z, 0-9, symbol)</p>
                                )}
                            </div>

                            {/* Phone Number (Strict 10 Digits) */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Phone Number <span className="text-red-500">*</span></label>
                                <input type="text" name="phone" placeholder="10-digit mobile number" maxLength={10} value={formData.phone} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                            </div>

                            {/* ORCID ID */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">ORCID ID <span className="text-red-500">*</span> </label>
                                <input type="text" name="orcidId" placeholder="xxxx-xxxx-xxxx-xxxx" value={formData.orcidId} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.orcidId ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.orcidId && <p className="text-[10px] text-red-500">{errors.orcidId}</p>}
                            </div>

                            {/* Affiliation Name and Location */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">Affiliation Name and Location <span className="text-red-500">*</span> </label>
                                <input type="text" name="affiliation" placeholder="Hospital/Academic Institution" value={formData.affiliation} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.affiliation ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                <p className="text-[10px] text-slate-400">Hospital/Academic Institution</p>
                                {errors.affiliation && <p className="text-[10px] text-red-500">{errors.affiliation}</p>}
                            </div>

                            {/* Department/Specialization */}
                            <div className="space-y-1 sm:col-span-2">
                                <label className="font-semibold text-slate-700 block">Department/Specialization <span className="text-red-500">*</span> </label>
                                <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.department ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                <p className="text-[10px] text-slate-400">Med students should list relevant department.</p>
                                {errors.department && <p className="text-[10px] text-red-500">{errors.department}</p>}
                            </div>

                            {/* Country Dropdown */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">Country <span className="text-red-500">*</span> </label>
                                <select name="country" value={formData.country} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 ${errors.country ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`}>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                                {errors.country && <p className="text-[10px] text-red-500">{errors.country}</p>}
                            </div>

                            {/* City */}
                            <div className="space-y-1">
                                <label className="font-semibold text-slate-700 block">City <span className="text-red-500">*</span> </label>
                                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.city ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'}`} />
                                {errors.city && <p className="text-[10px] text-red-500">{errors.city}</p>}
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="sm:col-span-2 flex flex-col gap-1.5 pt-1">
                                <label className="flex items-start gap-2 text-slate-600 cursor-pointer select-none">
                                    <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange}
                                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                    <span>Remember Me</span>
                                </label>
                                <p className="text-[10px] text-slate-400 pl-6 leading-normal">
                                    Your personal data will never be sold to third parties, we use this to enrich user experience.
                                </p>
                            </div>

                            {/* Action Buttons Section */}
                            <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-4 border-t border-slate-100 mt-2">
                                <button
                                    type="button"
                                    onClick={() => navigate('/')}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition-colors shadow-sm"
                                >
                                    Back to Home
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition-colors shadow-sm"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* Alternate Redirect Switcher */}
                        <div className="text-center pt-2">
                            <p className="text-slate-500">
                                Already have an account?{' '}
                                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: Academic Journal Cover art Placeholder Layout */}
                    <div className=" md:col-span-5 bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-between relative shadow-inner">
                        <div className="space-y-2 opacity-80">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                                <FaAward /> Peer Reviewed Journal
                            </div>

                        </div>

                        {/* Simulated Mock Book Cover Art */}
                        <div className="border-2 border-white/20 rounded-xl bg-slate-900/40 p-6 shadow-2xl space-y-4 backdrop-blur-sm border-l-4 border-l-teal-400">
                            <div className="text-[10px] tracking-widest uppercase font-bold text-teal-400">Medical & Pharmacy Science</div>
                            <h3 className="text-base font-bold leading-snug uppercase tracking-wide border-b border-white/10 pb-3">
                                Journal of Advanced Pharmaceutical and Health Sciences Education and Research (JAPHSER)
                            </h3>
                            <div className="flex justify-between items-center text-xs pt-1 font-medium font-mono text-slate-300">
                                <span>VOLUME 8</span>
                                <span>ISSUE 5</span>
                                <span className="bg-white/10 text-white px-2 py-0.5 rounded text-[10px]">2026</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-xs text-white/70 font-medium">
                            <FaBookOpen className="text-teal-400 shrink-0" />
                            <span>Connecting global researchers across open access medical domains.</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;