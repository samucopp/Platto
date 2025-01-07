import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsTransitioning(true);
        }, 5000);

        const timer2 = setTimeout(() => {
            navigate("/login");
        }, 8000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [navigate]);

    return (
        <div className="landing-page">
            <div className={`animation-container ${isTransitioning ? "fade-out" : "visible"}`}>
                <DotLottieReact
                    src="https://lottie.host/17be3493-9188-40cd-9abd-42c2f7219a42/wnjCZGU0dO.lottie"
                    autoplay
                />
            </div>
            <div className={`text-container ${isTransitioning ? "fade-in" : "hidden"}`}>
                <h1 className="final-title">Platto</h1>
            </div>
        </div>
    );
}

export default LandingPage;
