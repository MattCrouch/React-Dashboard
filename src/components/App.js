import React, { Component } from 'react';
import Widget from '../components/Widget';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget heading="Widget 1" rowspan="3" className="row-3">
          CONTENT!
        </Widget>
        <Widget />
        <Widget heading="Widget 3" colspan="2" rowspan="2" className="col-2 row-2" />
        <Widget heading="Widget 4" />
        <Widget heading="Widget 5" />
        <Widget heading="Widget 6" />
        <Widget heading="Widget 7" />
      </div>
    );
  }
}

export default App;