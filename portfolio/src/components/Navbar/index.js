import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
    const location = useLocation();
    document.body.style.backgroundColor="#fbf2ed";
    return (
        <div className="container home">
            <div className="row" id="landing">
                <div className="col-12" id="intro">
                    <h1 id="my-name">YNA LOUISE MATAYA</h1>
                    <h6 id="career">GRAPHIC DESIGNER & WEB DEVELOPER</h6>
                </div>
            </div>
            <div className="center-nav">
                <Link to="/" className={location.pathname === "/" ? "nav-link:active" : "nav-link"}>
                    Home
                </Link>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link:active" : "nav-link"}>
                    Portfolio
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "nav-link:active" : "nav-link"}>
                    About
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link:active" : "nav-link"}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;



