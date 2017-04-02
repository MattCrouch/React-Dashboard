import React, { Component } from 'react';
import Widget from '../components/Widget';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget heading="Widget 1" rowspan={3}>
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget >
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget heading="Widget 3" colspan={2} rowspan={2} >
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget heading="Widget 4" >
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget heading="Widget 5" >
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget heading="Widget 6" >
          <div>
          CONTENT!
          </div>
        </Widget>
        <Widget heading="Widget 7" >
          <div>
          CONTENT!
          </div>
        </Widget>
      </div>
    );
  }
}

export default App;