import { Link } from 'react-router-dom';
import './styles/button.scss';

const Button = ({text, href, target, type = "regular" | "inline"}) => {
    return (
        <div className={`btn btn--${type}`}>
            <span>{text}</span>
            {href ? <Link to={href} target={target}/> : null}
        </div>
    );
}

export default Button;