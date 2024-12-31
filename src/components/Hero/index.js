import React from "react";
import { highlightText } from "../../utils";
import "./styles/hero.scss";

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__wrapper container">
                <p>
                {highlightText("Hi, my name is")} TJ {highlightText("and I'm a")} front-end UX engineer & designer {highlightText("based in")} Philly. {highlightText("I'm")} available for full-time & freelance opportunities{highlightText(".")}
                </p>
            </div>
        </div>
    );
}

export default Hero;