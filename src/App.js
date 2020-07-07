import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { slide as Menu } from "react-burger-menu";

const App = () => {
  return (
    <div className="App">
      <Menu right>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/aboutme">
          AboutMe
        </a>
        <a className="menu-item" href="/projects">
          Projects
        </a>
        <a className="menu-item" href="/Contact">
          Contact
        </a>
      </Menu>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};

export default App;
