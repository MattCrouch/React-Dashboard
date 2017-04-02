import React, { Component } from 'react';
import '../styles/Widget.css';

class Widget extends Component {
  render() {
    return (
      <div className={"Widget " + this.props.testClass}>
        <div className="header">
            <h2>I am widget { this.props.number }</h2>
        </div>
        <div className="content">
            content
        </div>
      </div>
    );
  }
}

export default Widget;