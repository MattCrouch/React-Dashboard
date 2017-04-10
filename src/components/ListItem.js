import React, { Component } from 'react';
import Progress from '../components/Progress';

import '../styles/ListItem.css';

class ListItem extends Component {
    render() {
        return(
            <li className="ListItem">
                <div className="value">{ this.props.value }</div>
                <div className="label">
                    { this.props.label }
                    <Progress min={this.props.min} max={this.props.max} value={this.props.value} />
                </div>
            </li>
        )
    }
}

ListItem.propTypes = {
    label: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default ListItem;