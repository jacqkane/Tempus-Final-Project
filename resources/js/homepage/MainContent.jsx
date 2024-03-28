import React from "react";
import "/resources/scss/homepage/MainContent.scss";
import app from "/public/app-image/app.png";
import { Link } from "react-router-dom";

export default function MainContent() {
    return (
        <section className="main-content">
            <div className="main-content-container">
                <div className="main-content-image-app" >
                    <img src={app} alt="Image of the app" />
                </div>
                <div className="main-content-text">
                    <h1>Manage Your Work Time Efficiently with Our App!</h1>
                    <p>
                        Our application simplifies attendance management, making
                        it easier than ever to track employee work hours and
                        breaks seamlessly.
                    </p>
                </div>
                <div className="main-content-buttons">
                    <Link to="/register" className="first-button">Get Started</Link>
                    <a href="#features" className="second-button">Learn More</a>
                </div>
            </div>
        </section>
    );
}
