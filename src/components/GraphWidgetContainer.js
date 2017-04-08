import React, { Component } from 'react';
import axios from 'axios';

import GraphWidget from '../components/GraphWidget';

class GraphWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            values: []
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({ loading: true });

        axios.get(this.props.href)
            .then(response => {
                this.setState({ loading: false, data: response.data });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <GraphWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} data={this.state.data} loading={this.state.loading}/>
        );
    }
}

export default GraphWidgetContainer;