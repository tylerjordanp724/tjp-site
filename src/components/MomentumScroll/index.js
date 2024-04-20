import { useScroll,
    useTransform,
    useSpring,
    motion,
} from "framer-motion";
import { useEffect, useState, useCallback, useRef} from "react";
import ResizeObserver from "resize-observer-polyfill";

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
        damping: 22,
        mass: 0.1,
        stiffness: 200,
        bounce: 0.5,
        duration: 0.4,
        velocity: 100,
    }

    const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

    return (
        <>
            <motion.div
            ref={scrollRef}
            style={{ y: springNegativeScrollY }}
            className="scroll-container">
            {children}
            </motion.div>

            <div className="scroll-sizer" style={{ height: scrollableHeight }} />
        </>
    );
}

export default MomentumScroll;