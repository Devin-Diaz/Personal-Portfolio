import React from 'react';
import '../Styles/navbarStyle.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar__title" href="/">devin-diaz@portfolio:<span className='tilde'>~</span><span className='money'>$</span></a>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a className="navbar__link" href="/">~/</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/projects">projects/</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/resume">resume/</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/contact">contact/</a>
                </li>
            </ul>
        </nav>
    );
}
