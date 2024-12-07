import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate loading time (e.g., 3 seconds)
        setTimeout(() => {
            setLoading(false);
            navigate("/"); // Redirect to Home after the splash screen
        }, 3000); // 3 seconds duration for splash screen
    }, [navigate]);

    if (loading) {
        return (
            <div style={splashScreenStyles.container}>
                <img src="/logo.png" alt="App Logo" style={splashScreenStyles.logo} />
            </div>
        );
    }

    return null; // Once the splash screen is hidden, nothing is rendered
};

const splashScreenStyles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
    },
    logo: {
        width: "200px", // Adjust logo size as needed
        height: "auto",
    },
};

export default SplashScreen;
