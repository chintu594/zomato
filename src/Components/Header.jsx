import { useState } from 'react'
import { useNavigate, Link, NavLink } from "react-router-dom";

import Header_logo from "../assets/Header_logo.webp";
const Location_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
const header_arrow_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
const nav_search = <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>

const Header = ({ display, Setdisplay, Loginshow, Setloginshow, Signshow, Setsignshow, className }) => {

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    }

    return (
        <header className={`header ${display ? "header-show" : ""} ${className || ""}`}>
            <nav className="navbar">
                <div className="toggle" onClick={() => Setdisplay(!display)}>
                    <i className={`ri-menu-line ${display ? "ri-close-line" : ""}`}></i>
                </div>
                <div className="logoPlusFrom">
                    <img src={Header_logo} alt="Header-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
                    <div className="nav_form">
                        <div className="location_part">
                            {Location_icon}
                            <input type="text" placeholder='Agra' />
                            {header_arrow_icon}
                        </div>
                        <hr className='vertical_border'></hr>
                        <div className="search_form">
                            {nav_search}
                            <input type="text" placeholder='Search for restaurant, cuisine or a dish' />
                        </div>
                    </div>
                </div>
                <div className="right-sec">
                    <img src={Header_logo} className={`header_logo ${display ? "header_logo_show" : ""}`} alt="header-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
                    <div className={`navigations ${display ? "navigations_show" : ''}`}>
                        <ul>
                            <li><NavLink to="/agra">Add restaurant</NavLink></li>
                            <li><NavLink to="#" onClick={() => Setloginshow(true)}>Log in</NavLink></li>
                            <li><NavLink to="#" onClick={() => Setsignshow(true)}>Sign up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
