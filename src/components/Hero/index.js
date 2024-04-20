import React from "react";
import "./styles/hero.scss";

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__wrapper container">
                <p>
                <span>Hi, my name is</span> TJ <span>and I’m a</span> front-end UX engineer & designer <span>based in</span> Philly. <span>I’m</span> available for full-time & freelance opportunities<span>.</span>
                </p>
            </div>
        </div>
    );
}

export default Hero;