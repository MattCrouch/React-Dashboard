import React, { Component } from 'react';

import '../styles/Progress.css';

class Progress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Progress">
                <div className="inner" />
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