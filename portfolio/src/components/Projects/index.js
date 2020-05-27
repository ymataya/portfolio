import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import './style.css';
import rdr from "../../images/red.png"
import weather from "../../images/weather-1.png"
import burger from "../../images/hamburger.png"
import planner from "../../images/planner-1.png"
import shelter from "../../images/shelter-landing.png"


/* Stat Quest component */
const Game = () => (
    <div>
        <div className="col-12" id="body-page">
            <h1 id="name">Stat Quest</h1>
            <hr/>
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-8">
                        <img src={rdr} alt="game"/>
                    </div>

                    <div class="col-md-2">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-8">
                        <p>
                            <a class="btn btn-primary btn-left" href="https://github.com/ThaNinjaPower/project-1" role="button">Github</a>
                            <a class="btn btn-primary btn-right" href="https://thaninjapower.github.io/project-1/" role="button">Project</a>
                        </p>
                    </div>
                    <div class="col-md-2">
                    </div>
                </div>
            </div>
        </div>
     </div>
);

/* Planner component */
const Planner = () => (
    <div>
    <div className="col-12" id="body-page">
        <h1 id="name">Daily Planner</h1>
        <hr/>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <img src={planner} alt="weather"/>
                </div>

                <div class="col-md-2">
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <p>
                        <a class="btn btn-primary btn-left" href="https://github.com/ymataya/Daily-Planner" role="button">Github</a>
                        <a class="btn btn-primary btn-right" href="https://ymataya.github.io/Daily-Planner/"  role="button">Project</a>
                    </p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
 </div>
);

/* Weather component */
const Weather = () => (
    <div>
    <div className="col-12" id="body-page">
        <h1 id="name">Weather Checker</h1>
        <hr/>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <img src={weather} alt="weather"/>
                </div>

                <div class="col-md-2">
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <p>
                        <a class="btn btn-primary btn-left" href="https://github.com/ymataya/Weather" role="button">Github</a>
                        <a class="btn btn-primary btn-right" href="https://ymataya.github.io/Weather/" role="button">Project</a>
                    </p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
 </div>
);

/* Burger component */
const Burger = () => (
    <div>
    <div className="col-12" id="body-page">
        <h1 id="name">Hamburger App</h1>
        <hr/>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <img src={burger} alt="weather"/>
                </div>

                <div class="col-md-2">
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <p>
                        <a class="btn btn-primary btn-left" href="https://github.com/ymataya/Hamburger-App" role="button">Github</a>
                        <a class="btn btn-primary btn-right" href="https://limitless-cliffs-49808.herokuapp.com" role="button">Project</a>
                    </p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
 </div>
  );

/* Shelter component */
const Shelter = () => (
    <div>
    <div className="col-12" id="body-page">
        <h1 id="name">Shelter Helper</h1>
        <hr/>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <img src={shelter} alt="weather"/>
                </div>

                <div class="col-md-2">
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <p>
                        <a class="btn btn-primary btn-left" href="https://github.com/mauraparker02/project-2"role="button">Github</a>
                        <a class="btn btn-primary btn-right" href="https://fierce-waters-27012.herokuapp.com/" role="button">Project</a>
                    </p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
 </div>
  );

export default function Project() {
    const location = useLocation();
  return (
        <div>
            <div className="container">
                <Route path="/game" component={Game} />
                <Route path="/planner" component={Planner} />
                <Route path="/weather" component={Weather} />
                <Route path="/hamburger" component={Burger} />
                <Route path="/shelter" component={Shelter} />
                <div className="center-nav project-nav">
                    <Link to="/" className={location.pathname === "/" ? "nav-link:active" : "nav-link"}>
                        Home
                </Link>
                    <Link to="/work" className={location.pathname === "/work" ? "nav-link:active" : "nav-link"}>
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
        </div>
  );
}
