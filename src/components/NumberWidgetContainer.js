import React, { Component } from 'react';
import axios from 'axios';

import NumberWidget from '../components/NumberWidget';

class NumberWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            min: undefined,
            max: undefined,
            value: 0
        }
    }

    componentDidMount() {
        axios.get(this.props.src)
            .then(response => {
                let newState = {};

                if(response.data.hasOwnProperty("min")) {
                    newState["min"] = response.data.min;
                }
                if(response.data.hasOwnProperty("max")) {
                    newState["max"] = response.data.max;
                }
                if(response.data.hasOwnProperty("value")) {
                    newState["value"] = response.data.value;
                }

                this.setState(newState);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} value={this.state.value} />
        );
    }
}

export default NumberWidgetContainer;