import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListWidgetContainer href="http://192.168.1.109:3001/stats/top" heading="Top Ticket Answerers" col={1} row={1} rowspan={3} />
        <NumberWidgetContainer href="http://192.168.1.109:3001/tickets/open" heading="Open Ticket Total" col={2} row={1} />
        <GraphWidgetContainer href="http://192.168.1.109:3001/tickets/progression" heading="Tickets Over Time" col={3} row={1} colspan={2} rowspan={2} />
        <NumberWidgetContainer href="http://192.168.1.109:3001/tickets/today" heading="Tickets Opened Today" col={2} row={2} />
        <NumberWidgetContainer href="http://192.168.1.109:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" col={2} row={3} />
        <NumberWidgetContainer href="http://192.168.1.109:3001/stats/response" heading="4 Hour Response %" col={3} row={3} />
        <NumberWidgetContainer href="http://192.168.1.109:3001/stats/solved" heading="7 Day Solved %" col={4} row={3} />
      </div>
    );
  }
}

export default App;