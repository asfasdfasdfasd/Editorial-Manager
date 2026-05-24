import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import AccountFinderPage from './pages/AccountFinderPage'
import ManuscriptSubmission from './pages/ManuscriptSubmission'
import ArticleArchivePage from './pages/ArticleArchivePage'
import IssuePreviewPage from './pages/IssuePreviewPage'
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/account-finder' element={<AccountFinderPage />} />
            <Route path='/submit-manuscript' element={<ManuscriptSubmission />} />
            <Route path="/articles/archive" element={<ArticleArchivePage />} />
            <Route path="/archives/:slug" element={<IssuePreviewPage />} />
        </Routes>
    </BrowserRouter>
)

