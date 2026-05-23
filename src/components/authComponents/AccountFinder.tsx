import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountFinder: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSendDetails = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending login details for:', email);
        // Password recovery/email logic goes here
    };

    const handleCancel = () => {
        setEmail('');
        // You could also navigate back to the previous page here using react-router-dom's useNavigate
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-4 md:p-8 font-sans">
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 lg:gap-12 mt-12">

                {/* Left Column: Instructions */}
                <div className="w-full md:w-1/3 pt-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Account Finder
                    </h1>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Enter your e-mail address in the box below. If an account exists with this e-mail address,
                        your Username and Password will be e-mailed to you.
                    </p>
                </div>

                {/* Right Column: Form Area */}
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                    <div className="relative bg-white border border-gray-300 rounded-lg p-6 md:p-10 shadow-sm mt-3">

                        {/* Floating Legend Heading */}
                        <h2 className="absolute -top-3.5 left-6 bg-white px-3 text-sm font-bold text-gray-800 border border-gray-300 rounded-sm shadow-sm">
                            Please Enter The Following
                        </h2>

                        <form onSubmit={handleSendDetails} className="mt-4 flex flex-col items-center">

                            {/* Input Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full max-w-sm mb-8 mt-4">
                                <label htmlFor="email" className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right whitespace-nowrap">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all w-full"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 mb-6">
                                <Link
                                    to="/"
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm transition-colors"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
                                >
                                    Send Login Details
                                </button>
                            </div>

                            {/* Footer Link */}
                            <div className="pt-4">
                                <Link
                                    to="/login" // Update this to your login route, e.g., "/" or "/login"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                >
                                    Go to Login Page
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountFinder;