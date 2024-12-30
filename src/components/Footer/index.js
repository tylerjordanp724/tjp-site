import './styles/footer.scss';

const Footer = () => {
    const currentYear = () => new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <span>Copyright &copy; {currentYear()}. Tyler Jordan Perry</span>
            </div>
        </footer>
    );
}

export default Footer;