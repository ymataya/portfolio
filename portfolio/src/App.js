import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
