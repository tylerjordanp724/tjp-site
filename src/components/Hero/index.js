import React from "react";
import { highlightText } from "../../utils";
import { motion } from "framer-motion";
import "./styles/hero.scss";

const Hero = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 10}}
            transition={{duration: 1, delay: 0.5, ease: [.6,-0.01,.48,.99]}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
        >
            <div className="hero" id="hero">
                <div className="hero__wrapper container">
                    <p>
                    {highlightText("Hi, my name is")} TJ {highlightText("and I'm a")} front-end UX engineer & designer {highlightText("based in")} Philly. {highlightText("I'm")} available for full-time & freelance opportunities{highlightText(".")}
                    </p>
                    <></>
                </div>
            </div>
        </motion.div>
        
    );
}

export default Hero;