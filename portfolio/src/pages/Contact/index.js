import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Contact() {
    const location = useLocation();
    document.body.style.backgroundColor="white";
    return (
        <div className="container">
            <div className="row" id="body-page">
                <div className="col-12" id="intro">
                    <h1 id="my-name">CONTACT</h1>
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

            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 contact">
                    <h3>Let's chat!</h3>
                    <form>
                        <div className="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name..."></input>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email Address..."></input>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Message</label>
                            <input type="text" className="form-control" id="message" placeholder="Message..."></input>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                 </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <p className="more">
                            <button>Submit</button>
                        </p>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
        </div>
    );
}

export default Contact;
