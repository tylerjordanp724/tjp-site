import "./styles/section.scss";
import { motion } from 'framer-motion';

const Section = ({id, title, headline, children}) => {
    return (
        <motion.div
            id={id}
            initial={{opacity: 0, y: 30}}
            transition={{ duration: 0.75, delay: 1, ease: [.6,-0.01,.48,.99]}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
        >
            <div className="section">
                <div className="section__wrapper container">
                    <div className="section__heading">
                        <span className="title">{title}</span>
                        <h2 className="headline">{headline}</h2>
                    </div>
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

export default Section;