import React, { Component } from 'react';
import Widget from '../components/Widget';
import NumberWidget from '../components/NumberWidget';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget heading="Widget 1" rowspan={3} >
          <div>
          CONTENT!
          </div>
        </Widget>
        <NumberWidget heading="Widget 2" min={0} max={100} value={25} />
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