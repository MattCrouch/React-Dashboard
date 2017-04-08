import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListWidgetContainer src="http://localhost:3001/stats/top" heading="Top Ticket Answerers" rowspan={3} />
        <NumberWidgetContainer src="http://localhost:3001/tickets/open" heading="Open Ticket Total" />
        <GraphWidgetContainer src="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
        <NumberWidgetContainer src="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />
        <NumberWidgetContainer src="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" min={0} max={13} />
        <NumberWidgetContainer src="http://localhost:3001/stats/response" heading="4 Hour Response %" min={0} max={100}  />
        <NumberWidgetContainer src="http://localhost:3001/stats/solved" heading="7 Day Solved %" min={0} max={100}  />
      </div>
    );
  }
}

export default App;