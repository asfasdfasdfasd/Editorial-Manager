import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 w-full justify-center max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
                <p className="font-bold text-2xl">
                    Editorial Contact information section (the actual text content will be provided me later)
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;