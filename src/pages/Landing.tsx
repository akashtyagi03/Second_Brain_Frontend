
import { Header } from "../component/Header";
import { Hero } from "../component/Hero";
import { Features } from "../component/Feature";
import { Footer } from "../component/Footer";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    function handleOpenSignIn(){
        navigate("/signin")
    }
    function handleOpenSignUp(){
        navigate("/signup")
    }

    return (
        <div className="bg-gray-100 font-sans">
            <div className={``}>
                <Header onSignInClick={handleOpenSignIn} onSignUpClick={handleOpenSignUp} />
                <Hero onSignUpClick={handleOpenSignUp} />
                <Features />
                <Footer />
            </div>
        </div>
    );
}
