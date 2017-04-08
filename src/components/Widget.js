import React, { Component } from 'react';
import Loading from './Loading';
import '../styles/Widget.css';

class Widget extends Component {

    constructor(props) {
        super(props);

        //Assuming this information doesn't change...
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
            <h2>
                { this.props.heading }
            </h2>
            { this.props.loading ? <Loading /> : "" }
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

Widget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    children: React.PropTypes.element.isRequired
}

export default Widget;