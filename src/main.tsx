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
import PeerReviewPolicy from './pages/PeerReviewPolicyPage'
import ArchivePolicyPage from './pages/ArchivePolicyPage'
import JournalEditorialPolicy from './pages/JournalEditorialPolicyPage'
import ReviewerInstructionsPage from './pages/ReviewerInstructionsPage'
import ReviewerSignupPage from './pages/ReviewerSignupPage'
import ReviewerLoginPage from './pages/ReviewerLoginPage'
import PublicationEthicsPage from './pages/PublicationEthicsPage'
import JournalInformationPage from './pages/JournalInformationPage'
import AimScopePage from './pages/AimScopePage'
import CallForPaperPage from './pages/CallForPaperPage'
import PublicationChargesPage from './pages/PublicationChargesPage'
import PublicationPolicyPage from './pages/PublicationPolicyPage'
import OpenAccessPolicyPage from './pages/OpenAccessPolicyPage'
import InstructionsForAuthorPage from './pages/InstructionsForAuthorPage'

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
            <Route path="/policies/review" element={<PeerReviewPolicy />} />
            <Route path="/policies/achieve" element={<ArchivePolicyPage />} />
            <Route path="/policies/editorial" element={<JournalEditorialPolicy />} />
            <Route path="/reviewer/instructions" element={<ReviewerInstructionsPage />} />
            <Route path="/reviewer/join" element={<ReviewerSignupPage />} />
            <Route path="/reviewer/login" element={<ReviewerLoginPage />} />
            <Route path="/for-authors/publication-ethics" element={<PublicationEthicsPage />} />
            <Route path="/for-authors/charges" element={<PublicationChargesPage />} />
            <Route path="/for-authors/publication-policy" element={<PublicationPolicyPage />} />
            <Route path="/for-authors/open-access-policy" element={<OpenAccessPolicyPage />} />
            <Route path="/for-authors/instructions" element={<InstructionsForAuthorPage />} />
            <Route path="/about-journal/information" element={<JournalInformationPage />} />
            <Route path="/about-journal/call-for-paper" element={<CallForPaperPage />} />
            <Route path="/about-journal/aim-scope" element={<AimScopePage />} />
        </Routes>
    </BrowserRouter>
)

