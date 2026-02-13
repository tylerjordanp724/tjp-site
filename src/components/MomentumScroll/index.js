import { useScroll,
    useTransform,
    useSpring,
    motion,
} from "framer-motion";
import { useEffect, useState, useCallback, useRef, createContext } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const ScrollContext = createContext(null);

const MomentumScroll = ({children}) => {
    const scrollRef = useRef(null);
    const [scrollableHeight, setScrollableHeight] = useState(0);

    const resizeScrollableHeight = useCallback((entries) => {
        for (let entry of entries) {
          setScrollableHeight(entry.contentRect.height);
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
          resizeScrollableHeight(entries)
        );
        scrollRef.current && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [resizeScrollableHeight]);

    const { scrollY } = useScroll();
    
    const negativeScrollY = useTransform(
        scrollY,
        [0, scrollableHeight],
        [0, -scrollableHeight]
    );

    const springPhysics = {
        damping: 30,     // higher damping -> less oscillation
        mass: 0.9,       // more mass -> more inertia
        stiffness: 120,  // lower stiffness -> slower follow
        restDelta: 0.5,  // settle threshold
    }

    const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

    // Convert back to a positive smoothed scroll value for animations
    const smoothedScrollY = useTransform(
        springNegativeScrollY,
        [0, -scrollableHeight],
        [0, scrollableHeight]
    );

    return (
        <ScrollContext.Provider value={{ smoothedScrollY, scrollableHeight, scrollRef }}>
            <motion.div
            ref={scrollRef}
            style={{ y: springNegativeScrollY }}
            className="scroll-container">
            {children}
            </motion.div>

            <div className="scroll-sizer" style={{ height: scrollableHeight }} />
        </ScrollContext.Provider>
    );
}

export default MomentumScroll;