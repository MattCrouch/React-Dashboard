import React, { Component } from 'react';
import axios from 'axios';

import ListWidget from '../components/ListWidget';

class ListWidgetContainer extends Component {
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

        axios.get(this.props.src)
            .then(response => {
                this.setState({ loading: false, values: response.data });
            })
            .catch(error => {
                console.log(error);
                 this.setState({ loading: false });
            });
    }

    render() {
        return (
            <ListWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} listItems={this.state.values} loading={this.state.loading} />
        );
    }
}

export default ListWidgetContainer;