import React, { Component } from 'react';
import Widget from '../components/Widget';
// import ListDisplay from '../components/ListDisplay';
// import ListItem from '../components/ListItem';

import { Line } from 'react-chartjs-2';

import '../styles/GraphWidget.css';

class GraphWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        label: "Opened Tickets",
                        data: [9, 15, 10, 4, 6, 4, 5],
                        fill: false,
                        tension: 0,
                        borderColor: "#e74c3c",
                        borderWidth: 8,
                        pointRadius: 0,
                        pointHitRadius: 10
                    },
                    {
                        label: "Closed Tickets",
                        data: [5, 4, 6, 4, 10, 15, 9],
                        fill: false,
                        tension: 0,
                        borderColor: "#27ae60",
                        borderWidth: 8,
                        pointRadius: 0,
                        pointHitRadius: 10
                    }
                ]
            }
        }
        this.chartOptions = {
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
        };
    }

    componentDidMount() {
        // this.setState({
        //     values: {
        //         labels: ["A", "B", "C", "D", "E", "F"],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255,99,132,1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     }
        // });
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
                <div className="GraphWidget">
                    <Line data={this.state.values} options={this.chartOptions}/>
                </div>
            </Widget>
        );
    }
}

export default GraphWidget;