import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration continued for:', { firstName, lastName, email });
        // Registration logic goes here
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-4 md:p-8 font-sans">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 lg:gap-12 mt-8">

                {/* Left Column: Instructions */}
                <div className="w-full md:w-1/3 flex flex-col pt-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Pre-registration Page
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        To register to use the Editorial Manager system, please enter the requested information.
                        Upon successful registration, you will be sent an e-mail with instructions to verify your registration.
                    </p>
                </div>

                {/* Right Column: Form Area */}
                <div className="w-full md:w-2/3">

                    <div className="relative bg-white border border-gray-300 rounded-lg p-6 md:p-8 shadow-sm mt-3">
                        {/* Floating Legend Heading */}
                        <h2 className="absolute -top-3.5 left-6 bg-white px-3 text-sm font-bold text-gray-800 border border-gray-300 rounded-sm shadow-sm">
                            Choose a Registration Method
                        </h2>

                        {/* ORCID Section */}
                        <div className="mb-10 mt-4 border-b border-gray-100 pb-8">
                            <p className="text-sm font-semibold text-gray-800 mb-4">
                                Retrieve your details from the ORCID registry:
                            </p>
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 bg-[#A6CE39] hover:bg-[#95b933] text-white text-sm font-medium rounded-md shadow-sm transition-colors"
                            >
                                <div className="bg-white text-[#A6CE39] font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                                    iD
                                </div>
                                Use My ORCID Record
                            </button>
                        </div>

                        {/* Manual Entry Section */}
                        <form onSubmit={handleContinue} className="w-full">
                            <p className="text-sm font-semibold text-gray-800 mb-2">
                                Or type in your details and continue to register without using ORCID:
                            </p>
                            <p className="text-xs text-gray-500 mb-6 italic">
                                Asterisk indicates required field
                            </p>

                            <div className="space-y-4 max-w-lg mb-10">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <label htmlFor="firstName" className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right">
                                        Given/First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <label htmlFor="lastName" className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right">
                                        Family/Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                                    <label htmlFor="email" className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right sm:mt-2">
                                        E-mail Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex-1 flex flex-col sm:flex-row gap-3">
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="whitespace-nowrap px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
                                        >
                                            Continue &gt;&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Warning Notice Area */}
                            <div className="border-t-2 border-b-2 border-red-200 bg-red-50/50 p-5 mb-8 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                                <p>
                                    <strong className="text-red-600">WARNING</strong> - If you think you already have an existing registration of any type (Author, Reviewer, or Editor) in this system, please DO NOT register again. This will cause delays or prevent the processing of any review or manuscript you submit. If you are unsure if you are already registered, click the 'Forgot Your Login Details?' button.
                                </p>
                                <p>
                                    Please do not register again to change your current information; changes must be made to your existing information by clicking the 'Update My Information' link on the menu bar. If you are unsure how to perform these functions, please contact the editorial office at <a href="mailto:support@sviet.edu" className="text-blue-600 hover:underline font-medium">support@sviet.edu</a>.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
                                <Link to="/"
                                    className="px-6 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm transition-colors"
                                >
                                    Cancel
                                </Link>
                                <Link to="/account-finder"
                                    className="px-6 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm transition-colors"
                                >
                                    Forgot Your Login Details?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegistrationForm;