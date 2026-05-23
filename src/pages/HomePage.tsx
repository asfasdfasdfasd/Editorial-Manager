import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/authComponents/LoginForm';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">

                {/* Top Welcome Banner */}
                <div className="w-full bg-linear-to-r from-slate-200 via-slate-300 to-slate-200 py-5 rounded-lg mb-10 text-center shadow-sm border border-slate-300">
                    <p className="text-slate-600 text-sm md:text-base font-medium mb-1">
                        Welcome to Editorial Manager® for
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        SVIET
                    </h2>
                </div>

                {/* Main Content: 2-Column Layout */}
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">

                    {/* Left Column: Image & Text */}
                    <div className="w-full lg:w-[350px] max-w-md flex flex-col items-center">
                        <div className="overflow-hidden rounded-xl shadow-md border border-slate-200 w-full max-w-[300px]">
                            <img
                                src="https://placehold.co/300x400/1e293b/ffffff?text=SVIET+Official\nJournal+Cover"
                                alt="SVIET Cover"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-sm text-slate-600 mt-5 text-center px-4">
                            Visit <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">SVIET Portal</a> today and see what's new and exciting with the Official SVIET Journals!
                        </p>
                    </div>

                    {/* Right Column: Integrated Login Form */}
                    <div className="w-full lg:w-[600px] ">
                        {/* We pass isIntegrated={true} to trigger the compact layout we built earlier */}
                        <LoginForm isIntegrated={true} />


                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;