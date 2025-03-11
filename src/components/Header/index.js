import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data";
import { scrollToSection } from "../../utils";
import { motion } from "framer-motion";
import './styles/header.scss';


const Header = () => {
    const logo = `${process.env.PUBLIC_URL}/logo.svg`;

    return (
        <motion.div
            initial={{opacity: 0}}
            transition={{ duration: 1, delay: 0.5}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
        >
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
        </motion.div>
        
    );
}

export default Header;