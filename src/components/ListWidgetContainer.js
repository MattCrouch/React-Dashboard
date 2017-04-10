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
        this.getData().then(_ => {
            this.interval = setInterval(this.getData, 60000);
        });
    }

    getData() {
        this.setState({ loading: true });

        return axios.get(this.props.href)
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

ListWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default ListWidgetContainer;