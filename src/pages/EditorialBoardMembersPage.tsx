import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EditorialBoardMembersComponent from '../components/EditorialBoard/EditorialBoardMembersComponent';

const EditorialBoardMembersPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                <EditorialBoardMembersComponent />
            </main>
            <Footer />
        </div>
    );
};

export default EditorialBoardMembersPage;
