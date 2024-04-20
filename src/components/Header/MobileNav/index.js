import { useState, useEffect } from "react";
import { navItems } from "../../../data";
import '../styles/header.scss';

const MobileNav = ({logo}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

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
    );
}

export default MobileNav;