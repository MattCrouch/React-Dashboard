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
    
}

export default ListDisplay;