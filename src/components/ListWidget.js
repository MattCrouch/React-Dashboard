import React, { Component } from 'react';

import Widget from '../components/Widget';
import ListDisplay from '../components/ListDisplay';
import ListItem from '../components/ListItem';

import '../styles/ListWidget.css';

class ListWidget extends Component {
    sortListItems() {
        return this.props.listItems.slice().sort((a, b) => {
            if(a.value > b.value) {
                return -1;
            } else if(a.value < b.value) {
                return 1;
            }
            return 0;
        });
    }

    showWidget() {
        if(this.props.loading) {
            return <p>Loading...</p>;
        }

        let sortedItems = this.sortListItems();

        if(this.props.listItems.length === 0) {
            return null;
        }

        let min = 0;
        let max = sortedItems[0].value;
        
        return <ListDisplay>
                    { sortedItems.map((item, index) => <ListItem key={item.label} label={item.label} value={item.value} min={min} max={max} />)}
                </ListDisplay>
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                <div className="ListWidget">
                    { this.showWidget() }
                </div>
            </Widget>
        );
    }
}

export default ListWidget;