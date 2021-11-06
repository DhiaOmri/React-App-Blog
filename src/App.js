import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./NavBar/Footer";
import NavBar from "./NavBar/NavBar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import More from "./Pages/More";
import Write from "./Pages/Write";

function App() {
  const toast=()=>("Custom style",{
    className: 'black-background',
    bodyClassName: "grow-font-size",
    progressClassName: 'fancy-progress-bar'
  });
  
  return (
    <div className="App">
    
      <Router  >
        <NavBar />
        <Switch>
          <Route exact path="/" component="Home">
            <Home />
            
          </Route>
          <Router exact path="/contact">
            <Contact />
          </Router>
          <Router exact path="/write">
            <Write />
          </Router>
          <Route path="/more/:id">
            <More />
          </Route>
        </Switch>
      </Router>
      <ToastContainer  />
      <Footer />
    </div>
  );
}

export default App;
