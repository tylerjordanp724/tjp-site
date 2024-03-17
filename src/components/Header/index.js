import React from "react";
import { useState, useEffect } from "react";
import './styles/header.scss';

const Header = () => {
    const logo = `${process.env.PUBLIC_URL}/logo.svg`;
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {id:'recent-work',  title: 'Recent work'},
        {id:'experience', title: 'Experience'},
        {id:'about-me', title: 'About me'}
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        //document.body.classList.remove("overflow-y-hidden");
        if(menuOpen === false) {
            document.body.classList.add("overflow-y-hidden");
        } else if(menuOpen === true) {
            document.body.classList.remove("overflow-y-hidden");
        }
        
    }
    
    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
            document.body.classList.remove("overflow-y-hidden");
        }
    }

    useEffect(() => {
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
                        {navItems?.map((item, i) => {
                            return (
                                <li 
                                    key={`item-${i}`}>
                                        <a 
                                            href="#" 
                                            data-loc={`#${item.id}`}
                                            onClick={(e) => {
                                                const currTarget = document.querySelector(`${e.target.getAttribute('data-loc')}`);

                                                e.preventDefault();

                                                closeMenu();

                                                window.scrollTo(0, currTarget.offsetTop + 60);
                                                
                                            }}>
                                            {item.title}
                                        </a>
                                </li>
                            );
                        })}
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
                            {navItems?.map((item, i) => {
                                return <li key={`item-${i}`}><a href="#" data-loc={`#${item.id}`} onClick={(e) => {
                                    const currTarget = document.querySelector(`${e.target.getAttribute('data-loc')}`);

                                    e.preventDefault();

                                    window.scrollTo(0, currTarget.offsetTop + 120);
                                }}>{item.title}</a></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;