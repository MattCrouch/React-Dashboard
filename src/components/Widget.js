import React, { Component } from 'react';
import '../styles/Widget.css';

class Widget extends Component {

    constructor(props) {
        super(props);

        this.spanStyles = {};
        if(props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${ props.colspan }`;
        }
        if(props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${ props.rowspan }`;
        }
    }
  render() {
    return (
      <div style={ this.spanStyles } className="Widget">
        <div className="header">
            <h2>{ this.props.heading }</h2>
        </div>
        <div className="content">
            { this.props.children }
        </div>
      </div>
    );
  }
}

Widget.defaultProps = {
    heading: "Unnamed Widget",
    colspan: 1,
    rowspan: 1
}

export default Widget;