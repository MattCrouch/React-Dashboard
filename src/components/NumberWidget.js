import React, { Component } from 'react';

import Widget from '../components/Widget';
import NumberDisplay from '../components/NumberDisplay';
import Progress from '../components/Progress';

import '../styles/NumberWidget.css';

class NumberWidget extends Component {
    showWidget() {
        if(this.props.loading) {
            return <p>Loading...</p>;
        }
        
        return <div className="NumberWidget">
            <NumberDisplay max={this.props.max} value={this.props.value} />
            { this.showProgress() }
        </div>
    }
    
    showProgress() {
        if(this.props.min !== undefined && this.props.max !== undefined && this.props.value !== undefined) {
            return <Progress min={this.props.min} max={this.props.max} value={this.props.value} />;
        }

        return null;
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                { this.showWidget() }
            </Widget>
        );
    }
}

export default NumberWidget;