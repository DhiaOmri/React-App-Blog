import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./NavBar/Footer";
import NavBar from "./NavBar/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Write from "./Pages/Write";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/contact">
            <Contact />
          </Router>
          <Router path="/write">
            <Write />
          </Router>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
