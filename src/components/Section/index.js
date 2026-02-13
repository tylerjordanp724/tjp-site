import "./styles/section.scss";
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useContext, useRef, useState, useLayoutEffect } from 'react';
import { ScrollContext } from '../MomentumScroll';

const Section = ({id, title, headline, children}) => {
    const ref = useRef(null);
    const [bounds, setBounds] = useState({ top: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const node = ref.current;
        const update = () => setBounds({ top: node.offsetTop, height: node.offsetHeight });
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const { smoothedScrollY } = useContext(ScrollContext) || {};
    // Always call hooks unconditionally: create a local fallback MotionValue
    const fallbackScroll = useMotionValue(0);
    const scroll = smoothedScrollY ?? fallbackScroll;

    const start = bounds.top - (typeof window !== 'undefined' ? window.innerHeight * 0.6 : 0);
    const end = bounds.top + bounds.height * 0.2;

    const y = useTransform(scroll, [start, end], [30, 0], { clamp: true });
    const opacity = useTransform(scroll, [start, end], [0, 1], { clamp: true });

    return (
        <motion.div
            id={id}
            ref={ref}
            style={{opacity, y}}
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