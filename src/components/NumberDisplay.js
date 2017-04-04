import React, { Component } from 'react';

import '../styles/NumberDisplay.css';

class NumberDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let max = null;

        if(this.props.max !== undefined) {
            max =
            <span className="max">
                of { this.props.max }
            </span>;
        }

        return (
            <div className="NumberDisplay">
                <span className="value">
                    { this.props.value }
                </span>
                
                { max }
            </div>
        );
    }
}

NumberDisplay.defaultProps = {
    value: 0
}

NumberDisplay.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default NumberDisplay;