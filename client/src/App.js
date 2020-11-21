import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from './pages/aboutme';


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
