import React from "react";
import { useState } from "react";
import './styles/header.scss';

const Header = () => {
    const logo = `${process.env.PUBLIC_URL}/logo.svg`;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="mobile-nav container">
                <div className="mobile-nav__bar">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div 
                    className="menu-btn" 
                    onClick={(e) => {
                        // TODO: toggle menu button class
                    }}></div>
                </div>
                <div className={`mobile-nav__menu ${menuOpen ? 'is-open' : ''}`}></div>
            </div>
            <div className="desktop-nav container">
                <div className="desktop-nav">
                    <div className="logo">
                        <img src={logo} />
                    </div> 
                    <div className="nav-menu">
                        {/* TODO: add page anchors */}
                        <ul>
                            <li><a href={''}>Recent work</a></li>
                            <li><a href={''}>Experience</a></li>
                            <li><a href={''}>About me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;