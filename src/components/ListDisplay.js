import React, { Component } from 'react';

import '../styles/ListDisplay.css';

class ListDisplay extends Component {
    render() {
        return(
            <ul className="ListDisplay">
                { this.props.children }
            </ul>
        )
    }
}

ListDisplay.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
}

export default ListDisplay;