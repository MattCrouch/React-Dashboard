import React, { Component } from 'react';
import axios from 'axios';

import ListWidget from '../components/ListWidget';

class ListWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        axios.get(this.props.src)
            .then(response => {
                this.setState({ values: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <ListWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} listItems={this.state.values} />
        );
    }
}

export default ListWidgetContainer;