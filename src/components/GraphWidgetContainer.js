import React, { Component } from 'react';
import axios from 'axios';

import GraphWidget from '../components/GraphWidget';

class GraphWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        axios.get(this.props.src)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <GraphWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} data={this.state.data} />
        );
    }
}

export default GraphWidgetContainer;