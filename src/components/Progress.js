import React, { Component } from 'react';

import '../styles/Progress.css';

class Progress extends Component {
    render() {
        let value = this.props.value;
        
        if(value < this.props.min) {
            value = 0;
        } else if(value > this.props.max) {
            value = this.props.max;
        }

        let innerWidthStyle = { width: `${(value / this.props.max) * 100}%` };

        return (
            <div className="Progress">
                <div className="inner" style={ innerWidthStyle } />
            </div>
        );
    }
}

Progress.defaultProps = {
    value: 0
}

Progress.propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    value: React.PropTypes.number.isRequired
}

export default Progress;