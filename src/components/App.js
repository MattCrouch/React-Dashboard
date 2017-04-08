import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListWidgetContainer href="http://localhost:3001/stats/top" heading="Top Ticket Answerers" rowspan={3} />
        <NumberWidgetContainer href="http://localhost:3001/tickets/open" heading="Open Ticket Total" />
        <GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
        <NumberWidgetContainer href="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />
        <NumberWidgetContainer href="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" />
        <NumberWidgetContainer href="http://localhost:3001/stats/response" heading="4 Hour Response %" />
        <NumberWidgetContainer href="http://localhost:3001/stats/solved" heading="7 Day Solved %" />
      </div>
    );
  }
}

export default App;