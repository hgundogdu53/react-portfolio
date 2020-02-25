import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ContactPage from './components/ContactPage';
import Projects from './components/Projects';
import LandingPage from './components/LandingPage';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div >
  );
}


export default App;
