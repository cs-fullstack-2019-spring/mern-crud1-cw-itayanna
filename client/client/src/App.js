import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Products/>
        </header>
      </div>
    );
  }
}

export default App;
