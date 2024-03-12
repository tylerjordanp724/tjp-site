import React from "react";
import { useState, useEffect } from "react";
import './styles/header.scss';

const Header = () => {
    const logo = `${process.env.PUBLIC_URL}/logo.svg`;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const closeMenu = () => {
            if (menuOpen) {
                setMenuOpen(false);
            }
        }
        window.addEventListener('resize', closeMenu);
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="mobile-nav container">
                <div className="mobile-nav__bar">
                    <div className="logo">
                        <img src={logo} alt={'tjp-logo'}/>
                    </div>
                    <div 
                    className={`menu-btn ${menuOpen ? 'is-open' : ''}`} 
                    onClick={toggleMenu}>
                        <div className="menu-btn__slice"></div>
                        <div className="menu-btn__slice"></div>
                    </div>
                </div>
                <div className={`mobile-nav__menu ${menuOpen ? 'is-open' : ''}`}>
                    <ul>
                        <li><a href={'#recent-work'}>Recent work</a></li>
                        <li><a href={'#experience'}>Experience</a></li>
                        <li><a href={'#about-me'}>About me</a></li>
                    </ul>
                </div>
            </div>
            <div className="desktop-nav container">
                <div className="desktop-nav">
                    <div className="logo">
                        <img src={logo} alt={'tjp-logo'}/>
                    </div> 
                    <div className="nav-menu">
                        {/* TODO: add page scrolling */}
                        <ul>
                            <li><a href={'#recent-work'}>Recent work</a></li>
                            <li><a href={'#experience'}>Experience</a></li>
                            <li><a href={'#about-me'}>About me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;