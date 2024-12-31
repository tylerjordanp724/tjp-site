import { currentYear } from '../../utils';
import './styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <span>Copyright &copy; {currentYear()}. Tyler Jordan Perry</span>
            </div>
        </footer>
    );
}

export default Footer;