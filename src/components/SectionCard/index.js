import React from "react";
import { motion } from "framer-motion";

const SectionCard = ({id, title, headline, text, children}) => {
    return (
        <motion.div
            id={id}
            initial={{opacity: 0, y: 30}}
            transition={{ duration: 0.75, delay: 0.05, ease: [.6,-0.01,.48,.99]}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
        >
            <div className="section section-card">
                <div className="section-card__wrapper container">
                    <div className="card-intro">
                        <span className="title">{title}</span>
                        <h2 className="headline">{headline}</h2>
                    </div>
                    <div className="card-body">
                        <p>{text}</p>
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SectionCard;