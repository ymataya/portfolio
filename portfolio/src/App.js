import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Project from "./components/Projects";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/work" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/game" component={Project} />
      <Route exact path="/planner" component={Project} />
      <Route exact path="/weather" component={Project} />
      <Route exact path="/hamburger" component={Project} />
      <Route exact path="/shelter" component={Project} />
    </div>
    </Router>
  
  );
}

export default App;
