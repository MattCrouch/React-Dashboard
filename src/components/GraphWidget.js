import React, { Component } from 'react';
import Widget from '../components/Widget';

import { Line } from 'react-chartjs-2';

import '../styles/GraphWidget.css';

class GraphWidget extends Component {
    constructor(props) {
        super(props);

        this.generateDatasets = this.generateDatasets.bind(this);
        this.showWidget = this.showWidget.bind(this);
        
        this.state = {
            values: {
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                datasets: []
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scaleShowGridLines : false,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontFamily: "'Didact Gothic', sans-serif",
                            fontSize: 18,
                            fontColor: "#ecf0f1",
                        },
                        gridLines: {
                            display:false
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.data !== nextProps.data) {
            this.generateDatasets(nextProps);
        }
    }

    generateDatasets(props) {
        let datasets = [];

        props.data.forEach(function(data) {
            datasets.push({
                label: data.label,
                data: data.data,
                fill: false,
                tension: 0,
                borderColor: data.color,
                borderWidth: 8,
                pointRadius: 0,
                pointHitRadius: 10
            });
        }, this);

        this.setState({
            values: {
                datasets
            }
        });
    }

    showWidget() {
        if(this.props.loading) {
            return <p>Loading...</p>;
        }

        return <Line data={this.state.values} options={this.state.chartOptions} redraw />
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                <div className="GraphWidget">
                    {this.props.loading ? <p>Loading...</p> : "" }
                    <Line data={this.state.values} options={this.state.chartOptions} />
                </div>
            </Widget>
        );
    }
}

export default GraphWidget;