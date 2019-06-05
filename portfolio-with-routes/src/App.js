import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar'
import ProjectDetails from './components/ProjectDetails'
import { projects as Projects } from './components/Projects';


import { Switch, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className="App">

        <NavBar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path="/projects/:id" exact component={ProjectDetails} />
        </Switch>

      </div>
    );
  }
}

export default App