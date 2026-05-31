import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash,  FaAward, FaBookOpen } from 'react-icons/fa6';

interface LoginErrors {
    email?: string;
    password?: string;
}

const AuthForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<LoginErrors>({});

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: LoginErrors = {};

        // Simple validation checks
        if (!email.trim()) {
            newErrors.email = 'Email address or ID is required.';
        }
        if (!password) {
            newErrors.password = 'Password is required.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            // Log actions for submission
            console.log('Login credentials submitted:', { email, password, rememberMe });
            alert('Logged in successfully!');
            navigate('/'); // Redirect to home page
        }
    };

    return (
        <div className=" bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
            {/* Split-Screen Login Container  */}
            <div className="w-full max-w-5xl my-10 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 h-[470px]">

                {/* Left Panel: Login Inputs  */}
                <div className="md:col-span-7 p-6 md:p-12 flex flex-col  space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            Login
                        </h2>
                        <p className="text-xs text-slate-400">
                            Welcome back! Please enter your journal credentials to gain access.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4 text-xs">
                        {/* Email / ID Input field  */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="font-semibold text-slate-700 block">
                                EmailId <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email Id or Password"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                                }}
                                className={`w-full px-3 py-2.5 border rounded-md bg-slate-50 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'
                                    }`}
                            />
                            {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email}</p>}
                        </div>

                        {/* Password Input field with Forgot trigger link  */}
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="font-semibold text-slate-700">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-blue-600 hover:underline font-medium text-[11px]"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                                    }}
                                    className={`w-full px-3 py-2.5 border rounded-md pr-9 bg-slate-50 focus:outline-none focus:ring-2 transition-all ${errors.password ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-blue-100 focus:border-blue-500'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-[10px] text-red-500 font-medium">{errors.password}</p>}
                        </div>

                        {/* Remember Me Selection Toggle  */}
                        <div className="flex items-center pt-1">
                            <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                                />
                                <span className="font-medium text-slate-700">Remember Me</span>
                            </label>
                        </div>

                        {/* Primary Sign In Action Button  */}
                        <div className="pt-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors shadow-sm tracking-wide text-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Bottom Split: Sign up Switcher & Social Quick Redirect Links  */}
                    <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between  text-xs">
                        <p className="text-slate-500">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                                Sign up
                            </Link>
                        </p>


                    </div>
                </div>

                {/* Right Panel: Academic Journal Cover Art Placeholder Layout */}
                <div className=" md:col-span-5 bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-between relative shadow-inner">
                    <div className="space-y-2 opacity-80">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                            <FaAward /> Peer Reviewed Journal
                        </div>

                    </div>

                    {/* Simulated Mock Book Cover Art Container */}
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
        </div>
    );
};

export default AuthForm;