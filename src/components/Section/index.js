import React from "react";
import "./styles/section.scss";

const Section = ({id, title, headline, children}) => {
    return (
        <div className="section" id={id}>
            <div className="section__wrapper container">
                <div className="section__heading">
                    <span className="title">{title}</span>
                    <h2 className="headline">{headline}</h2>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Section;