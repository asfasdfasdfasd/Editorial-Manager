import AuthForm from "../components/authComponents/LoginForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const LoginPage = () => {
    return (
        <>
            <Navbar />
            <AuthForm isIntegrated={false} />
            <Footer />
        </>
    )
}

export default LoginPage