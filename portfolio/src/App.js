import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import projectList from "./pages/Project";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/game" component={projectList} />
      <Route exact path="/planner" component={projectList} />
      <Route exact path="/weather" component={projectList} />
      <Route exact path="/hamburger" component={projectList} />
      <Route exact path="/shelter" component={projectList} />
    </div>
    </Router>
  );
}

export default App;
