import { currentYear } from '../../utils';
import { motion } from 'framer-motion';
import './styles/footer.scss';

const Footer = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            transition={{ duration: 1, delay: 0.5, ease: 'easeIn'}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
        >
            <footer className="footer">
                <div className="footer__wrapper container">
                    <span>Copyright &copy; {currentYear()}. Tyler Jordan Perry</span>
                </div>
            </footer>
        </motion.div>
    );
}

export default Footer;