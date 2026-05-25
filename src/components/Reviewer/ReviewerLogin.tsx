import React, { useState } from 'react';
import { FaLockOpen } from 'react-icons/fa6';

const ReviewerLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim() || !password) {
            setError('Please enter both your email address and account password.');
            return;
        }

        setError('');
        console.log('Reviewer Authentication Requested:', { email, password });
        alert('Reviewer validation ongoing...');
    };

    return (
        <div className="w-full max-w-md mx-auto my-12 px-4 font-sans text-slate-800 antialiased">
            {/* Authenticator Container with subtle blue background shading */}
            <div className="bg-[#eef7fc] border border-[#d2e7f4] rounded-lg p-6 md:p-8 shadow-sm space-y-5">
                <h2 className="text-base font-bold text-red-600 flex items-center gap-2 border-b border-[#cbdfe9] pb-2 uppercase tracking-wide">
                    <FaLockOpen size={14} /> Reviewer Login
                </h2>

                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                    {/* Email Input */}
                    <div className="space-y-1">
                        <label htmlFor="revEmail" className="font-semibold text-slate-700 block">
                            Email address
                        </label>
                        <input
                            type="text"
                            id="revEmail"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all text-slate-800"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <label htmlFor="revPassword" className="font-semibold text-slate-700 block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="revPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all text-slate-800"
                        />
                    </div>

                    {/* Validation Alerts */}
                    {error && (
                        <p className="text-[10px] text-red-600 bg-red-50 border border-red-200 rounded p-2 leading-normal">
                            {error}
                        </p>
                    )}

                    {/* Action Trigger Row */}
                    <div className="pt-1">
                        <button
                            type="submit"
                            className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium px-5 py-2 border border-slate-300 rounded shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewerLogin;