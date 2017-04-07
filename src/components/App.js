import React, { Component } from 'react';
import NumberWidget from '../components/NumberWidget';
import ListWidget from '../components/ListWidget';
import GraphWidget from '../components/GraphWidget';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListWidget heading="Top Ticket Answerers" rowspan={3} />
        <NumberWidget heading="Open Ticket Total" value={13} />
        <GraphWidget heading="Tickets Over Time" colspan={2} rowspan={2} />
        <NumberWidget heading="Tickets Opened Today" value={9} />
        <NumberWidget heading="Tickets Marked 'Urgent'" min={0} max={13} value={2} />
        <NumberWidget heading="4 Hour Response %" min={0} max={100} value={89} />
        <NumberWidget heading="7 Day Solved %" min={0} max={100} value={25} />
      </div>
    );
  }
}

export default App;