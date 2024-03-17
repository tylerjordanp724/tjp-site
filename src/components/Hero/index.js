import React from "react";
import "./styles/hero.scss";

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__wrapper container">
                <p>
                <span>My name is</span> Tyler Perry <span>and I’m a</span> front-end UX engineer & designer <span>based in</span> Philadelphia. <span>I’m</span> available for full-time & freelance opportunities<span>.</span>
                </p>
            </div>
        </div>
    );
}

export default Hero;