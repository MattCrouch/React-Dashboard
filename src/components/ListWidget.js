import React, { Component } from 'react';

import Widget from '../components/Widget';
import ListDisplay from '../components/ListDisplay';
import ListItem from '../components/ListItem';

import '../styles/ListWidget.css';

class ListWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        }
    }

    componentDidMount() {
        this.setState({
            listItems: [
                {
                    label: "Lauren",
                    value: 26
                },
                {
                    label: "Dave",
                    value: 13
                },
                {
                    label: "John",
                    value: 18
                },
                {
                    label: "Gregg",
                    value: 19
                },
                {
                    label: "Matt",
                    value: 4
                },
                {
                    label: "Jaral",
                    value: 12
                },
                {
                    label: "Bridget",
                    value: 18
                },
                {
                    label: "Rob",
                    value: 7
                }
            ]
        });
    }

    render() {
        //Sort by largest value first
        let sortedItems = this.state.listItems.slice().sort((a, b) => {
            if(a.value > b.value) {
                return -1;
            } else if(a.value < b.value) {
                return 1;
            }
            return 0;
        });

        if(this.state.listItems.length == 0) {
            return <span>Loading...</span>;
        }

        let min = 0;
        let max = sortedItems[0].value;
        
        console.log(min, max);

        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                <div className="ListWidget">
                    <ListDisplay>
                        { sortedItems.map((item, index) => <ListItem key={item.label} label={item.label} value={item.value} min={min} max={max} />)}
                    </ListDisplay>
                </div>
            </Widget>
        );
    }
}

export default ListWidget;