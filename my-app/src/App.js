import React, { Component } from 'react';
import logo from './logo.svg';
// import Button from "./modules/Button";
// import P from "./modules/P";
// import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/sources/NewsList";
//var Button = require("./modules/Button"). default;
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Button> Ini Button </Button >
      //   <P> Hello ini Paragraph </P>
      // </div>
      <div className="App">
        <NewsList />
      </div>
    );
  }
}

export default App;
