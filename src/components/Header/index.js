import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data";
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
                                return <li key={`item-${i}`}><NavLink to="#" data-loc={`#${item.id}`} onClick={(e) => {
                                    const currTarget = document.querySelector(`${e.target.getAttribute('data-loc')}`);

                                    e.preventDefault();

                                    window.scrollTo(0, currTarget.offsetTop + 120);
                                }}>{item.title}</NavLink></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;