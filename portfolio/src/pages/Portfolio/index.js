import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import game from "../../images/stat-quest.jpg";
import planner from "../../images/planner.jpg";
import weather from "../../images/weather.jpg";
import burger from "../../images/burger.png";
import shelter from "../../images/shelter-th-01.png";

const Portfolio = () => {
    const location = useLocation();
    document.body.style.backgroundColor = "white";
    const [project, setProjects] = useState([
        {
            id: 1,
            title: "Game Stat Search",
            image: game,
            route: "/game"
        },
        {
            id: 2,
            title: "Daily Planner",
            image: planner,
            route: "/planner"
        },
        {
            id: 3,
            title: "Weather Checker",
            image: weather,
            route: "/weather"
        },
        {
            id: 4,
            title: "Hamburger App",
            image: burger,
            route: "/hamburger"
        },
        {
            id: 5,
            title: "Shelter Helper",
            image: shelter,
            route: "/shelter"
        }
    ])

    return (
        <div class="container">
            <div className="row" id="body-page">
                <div className="col-12" id="intro">
                    <h1 id="my-name">PORTFOLIO</h1>
                </div>
            </div>
            <div className="center-nav">
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
            <div class="row" id="portfolio">
                {project.map(projects => (
                    <div class="col-md-4">
                        <Link to={projects.route}><img src={projects.image} alt="thumbnail" /></Link>
                        <p>{projects.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Portfolio;

