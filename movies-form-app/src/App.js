import React, { Component } from 'react';
import './App.css';

import DynamicMoviesList from './components/stateful/DynamicList'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <h3>Listado de películas stateful:</h3>
          <DynamicMoviesList />
        </div>
      </div>
    )
  }
}

export default App;
