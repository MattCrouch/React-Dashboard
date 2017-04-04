import React, { Component } from 'react';

import Widget from '../components/Widget';
import NumberDisplay from '../components/NumberDisplay';
import Progress from '../components/Progress';

import '../styles/NumberWidget.css';

class NumberWidget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                <div className="NumberWidget">
                    <NumberDisplay max={this.props.max} value={this.props.value} />
                    <Progress min={this.props.min} max={this.props.max} value={this.props.value} />
                </div>
            </Widget>
        );
    }
}

export default NumberWidget;