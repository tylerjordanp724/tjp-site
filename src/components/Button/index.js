import { Link } from 'react-router-dom';
import './styles/button.scss';



const Button = ({text, href, target}) => {
    return (
        <div className="btn">
            <span>{text}</span>
            <Link to={href} target={target}/>
        </div>
    );
}

export default Button;