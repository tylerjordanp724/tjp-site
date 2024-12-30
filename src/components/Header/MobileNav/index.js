import { useState, useEffect } from "react";
import { navItems } from "../../../data";
import '../styles/header.scss';

const MobileNav = ({logo}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        if(!menuOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else if(menuOpen) {
            document.body.classList.remove("overflow-y-hidden");
        }
    }
    
    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
            document.body.classList.remove("overflow-y-hidden");
        }
    }

    const scrollToSection = (el) => {
        el.preventDefault();
        const currTarget = document.querySelector(`${el.target.getAttribute('data-loc')}`);
        window.scrollTo(0, currTarget.offsetTop + 120);
    }

    const navOnMobile = (navItem) => {
        closeMenu();
        scrollToSection(navItem);
    }

    useEffect(() => {
        window.addEventListener('resize', closeMenu);
    }, [menuOpen, closeMenu]);
    return (
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
                                        href="javascript:void(0)" 
                                        data-loc={`#${item.id}`}
                                        onClick={e => navOnMobile(e)}>
                                        {item.title}
                                    </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;