import React, { Component } from 'react';
import Widget from '../components/Widget';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget number="1" testClass="row-3" />
        <Widget number="2" testClass="" />
        <Widget number="3" testClass="col-2 row-2" />
        <Widget number="4" testClass="" />
        <Widget number="5" testClass="" />
        <Widget number="6" testClass="" />
        <Widget number="7" testClass="" />
      </div>
    );
  }
}

export default App;