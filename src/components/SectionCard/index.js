import React from "react";

const SectionCard = ({id, title, headline, text, children}) => {
    return (
        <div className="section section-card" id={id}>
            <div className="section-card__wrapper container">
                <div className="card-intro">
                    <span className="title">{title}</span>
                    <h2 className="headline">{headline}</h2>
                </div>
                <div className="card-body">
                    <p>{text}</p>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SectionCard;