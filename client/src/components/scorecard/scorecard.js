import React, { Component } from "react";
import { Bar, Line, HorizontalBar, Pie } from "react-chartjs-2";
import "./scorecard.css";


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
                <h2>ScoreCard</h2><hr />
                <div>
                    <h5>Customer Share by PN Quantity</h5>
                    <Pie data={this.state.chartData1} />
                </div><hr />
                <div>
                    <h5>Scrap</h5>
                    <Line 
                        data={this.state.chartData2}
                        width={100}
                        height={60} />
                </div><hr />
                <div>
                    <h5>First Pass Yield 1 - Rate</h5>
                    <Bar
                        data={this.state.chartData3}
                        width={100}
                        height={150}
                        options={{ maintainAspectRatio: false }}
                    />
                </div><hr />
                <div>
                    <h5>First Pass Yield 2 - Rate</h5>
                    <Bar
                        data={this.state.chartData4}
                        width={100}
                        height={150}
                        options={{ maintainAspectRatio: false }}
                    />
                </div><hr />
                {/* <div className="row">
                    <div className="col-6">
                        <div>
                            <h5>Customer Share by PN Quantity</h5>
                            <Pie data={this.state.chartData1} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h5>Scrap</h5>
                            <Line 
                                data={this.state.chartData2}
                                width={100}
                                height={60} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div>
                            <h5>First Pass Yield 1 - Rate</h5>
                            <Bar
                                data={this.state.chartData3}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h5>First Pass Yield 2 - Rate</h5>
                            <Bar
                                data={this.state.chartData4}
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Scorecard;