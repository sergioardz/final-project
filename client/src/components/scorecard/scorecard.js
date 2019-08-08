import React, { Component } from "react";
import { Bar, Line, HorizontalBar, Pie } from "react-chartjs-2";


class Scorecard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData1: props.chartData1,
            chartData2: props.chartData2,
            chartData3: props.chartData3,
            chartData4: props.chartData4
        }
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        displayaxes: false,
    }

    render() {
        return (
            <div className="container" id="score">
                <h2>ScoreCard</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="chart">
                            <Pie
                                data={this.state.chartData1}
                                options={{
                                    maintainAspectRatio: true,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="chart">
                            <Line
                                data={this.state.chartData2}
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="chart">
                            <Bar
                                data={this.state.chartData3}
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="chart">
                            <Bar
                                data={this.state.chartData4}
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: false
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scorecard;