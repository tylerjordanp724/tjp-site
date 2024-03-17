import './styles/button.scss';

const Button = ({text, href, target}) => {
    return (
        <div className="btn">
            <span>{text}</span>
            <a href={href} target={target}></a>
        </div>
    );
}

export default Button;