import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Weather from "./components/Weather";
import Planner from "./components/Planner";
import Game from "./components/Game";
import Burger from "./components/Burger";
import Shelter from "./components/Shelter";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/planner" component={Planner} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/hamburger" component={Burger} />
      <Route exact path="/shelter" component={Shelter} />
    </div>
    </Router>
  );
}

export default App;
