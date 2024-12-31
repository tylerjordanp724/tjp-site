import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data";
import { scrollToSection } from "../../utils";
import './styles/header.scss';


const Header = () => {
    const logo = `${process.env.PUBLIC_URL}/logo.svg`;

    return (
        <header className="header">
            <div className="desktop-nav container">
                <div className="desktop-nav">
                    <div className="logo">
                        <img src={logo} alt={'tjp-logo'}/>
                    </div> 
                    <div className="nav-menu">
                        <ul>
                            {navItems?.map((item, i) => {
                                return (
                                    <li key={`item-${i}`}>
                                        <NavLink 
                                            to="#" 
                                            data-loc={`#${item.id}`} 
                                            onClick={e => scrollToSection(e)}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;