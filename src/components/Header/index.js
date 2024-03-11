import React from "react";
import './styles/header.scss';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__nav container">
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/logo.svg`} />
                    </div>
                    <div className="menu-btn"></div>
                </div>
            </header>
        </>
    );
}

export default Header;