import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
    isIntegrated?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isIntegrated = false }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginProcess = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login process initiated for:', username);
        // Future login logic here
    };

    // Define dynamic styles based on the context
    const cardClasses = isIntegrated
        ? 'w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200'
        : 'w-full max-w-4xl bg-white p-8 md:p-10 rounded-2xl shadow-xl border mt-5 border-gray-100';


    // The actual form content
    const formContent = (
        <div className={cardClasses}>
            <div className="relative border border-gray-300 rounded-md p-6 mt-4">
                {/* Floating Heading imitating the "Please Enter the Following" legend */}
                <h2 className="absolute -top-3.5 left-4 bg-white px-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-sm shadow-sm">
                    Please Enter the Following
                </h2>

                <form onSubmit={handleLoginProcess} className="w-full mt-2">
                    {/* Inputs Section */}
                    <div className={`space-y-4 mx-auto mb-5 ${isIntegrated ? 'max-w-full' : 'max-w-md'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <label className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right" htmlFor="username">
                                Username:
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all sm:w-2/3"
                                required
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <label className="sm:w-1/3 text-sm font-medium text-gray-700 sm:text-right" htmlFor="password">
                                Password:
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all sm:w-2/3"
                                required
                            />
                        </div>

                        <div className='flex justify-end text-sm m-0'>
                            <Link to="/account-finder" className="underline text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                Forgot details ?
                            </Link>
                        </div>

                        {/* Hidden submit ensures Enter key works */}
                        <button type="submit" className="hidden">Submit</button>
                    </div>

                    {/* 4 Login Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8">
                        <Link to="#" className="flex-1 sm:flex-none">
                            <button type="button" className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium rounded border border-gray-300 shadow-sm transition-colors whitespace-nowrap">
                                Author Login
                            </button>
                        </Link>

                        <Link to="#" className="flex-1 sm:flex-none">
                            <button type="button" className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium rounded border border-gray-300 shadow-sm transition-colors whitespace-nowrap">
                                Reviewer Login
                            </button>
                        </Link>

                        <Link to="#" className="flex-1 sm:flex-none">
                            <button type="button" className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium rounded border border-gray-300 shadow-sm transition-colors whitespace-nowrap">
                                Editor Login
                            </button>
                        </Link>

                        <Link to="#" className="flex-1 sm:flex-none">
                            <button type="button" className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium rounded border border-gray-300 shadow-sm transition-colors whitespace-nowrap">
                                Publisher Login
                            </button>
                        </Link>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
                        <Link to="/account-finder" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                            Send Login Details
                        </Link>

                        <Link to="/signup" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                            Register Now
                        </Link>

                        <Link to="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                            Login Help
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    );

    // If integrated, just return the card. If standalone, wrap it in a full-page centered layout.
    if (isIntegrated) {
        return formContent;
    }

    return (
        <div className="flex  justify-center  bg-gray-50 p-4">
            {formContent}
        </div>
    );
};

export default AuthForm;