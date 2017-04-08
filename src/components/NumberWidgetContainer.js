import React, { Component } from 'react';
import axios from 'axios';

import NumberWidget from '../components/NumberWidget';

class NumberWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            value: undefined
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.setState({ initialLoad: true });
        this.getData().then(_ => {
            this.setState({ initialLoad: false })
            this.interval = setInterval(this.getData, 5000);
        });
    }

    getData() {
        this.setState({ loading: true });

        return axios.get(this.props.href)
            .then(response => {
                let newState = { loading: false };

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
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} value={this.state.value} loading={this.state.loading}/>
        );
    }
}

export default NumberWidgetContainer;