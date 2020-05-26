import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function About() {
    const location = useLocation();
    return (
            <div className="container">
                <div className="row" id="landing">
                    <div className="col-12" id="intro">
                        <h1 id="name">ABOUT ME</h1>
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

                <div className="row main">
                    <div className="col-md-6">
                         {/* <img src="images/me.jpg" class="me"> */}
                    </div>

                    <div className="col-md-6 main-text">
                        <p>
                            Hi, I'm Yna (pronounced 'Ee-na').
                            I'm a designer and web developer who is passionate in learning,  is a patient problem-solver, and values creating meaningful projects. 
                            I would say I'm an interdisciplinary artist since I love branching out of graphic design and learning
                            different mediums to showcase my work. I believe that art is reinvention. My designs are products of a process of recreation and patience that I hone each day. 
                            Whenever I create something, I aim to incorporate not just aesthetics, but meaning as well, in hopes of conveying the message that are well-built, clear, and impactful. 
                            Looking forward to hone my skills more in the future as part of a collaborative team in the industry.
                        </p>
                        <hr className="my-5"></hr>
                        <p>
                            <a class="btn btn-primary btn-lg" target="_blank" href="images/resume.pdf" role="button">Resume</a>
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default About;
