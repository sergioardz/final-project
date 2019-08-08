import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import ProviderCard from "../components/ProviderCard"
import Dashboard from "./dashboard";
import Statistics from "./statistics";
import ScoreCard from "./scorecard";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            chartData1: {},
            chartData2: {},
            chartData3: {},
            chartData4: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData1: {
                labels: ['Transport Co.', 'Glass Co.', 'Oil & Gas Co.', 'Mining Co.', 'Automotive Co.'],
                datasets: [
                    {
                        data: [
                            27020,
                            20874,
                            19026,
                            15044,
                            11603
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                        ]
                    }
                ]
            },
            chartData2: {
                labels: ['TC-001', 'TC-002', 'GC-001', 'OGC-001', 'MC-002', 'AC-002', 'GC-002', 'OGC-002', 'MC-001', 'AC-001' ],
                datasets: [
                    {
                        label: 'Scrap % Rate by PN',
                        data: [
                            0.3441,
                            0.3442,
                            0.8467,
                            0.5573,
                            0.3858,
                            0.4712,
                            0.8626,
                            0.2461,
                            0.5359,
                            0.4481
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            },
            chartData3: {
                labels: ['TC-001', 'TC-002', 'GC-001', 'OGC-001', 'MC-002', 'AC-002', 'GC-002', 'OGC-002', 'MC-001', 'AC-001' ],
                datasets: [
                    {
                        label: 'FPY1 by PN',
                        data: [
                            97.93,
                            98.20,
                            96.26,
                            96.86,
                            97.49,
                            97.22,
                            97.56,
                            96.61,
                            97.34,
                            96.86
                        ],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'
                    }
                ]
            },
            chartData4: {
                labels: ['TC-001', 'TC-002', 'GC-001', 'OGC-001', 'MC-002', 'AC-002', 'GC-002', 'OGC-002', 'MC-001', 'AC-001' ],
                datasets: [
                    {
                        label: 'FPY2 by PN',
                        data: [
                            99.66,
                            99.66,
                            99.15,
                            99.44,
                            99.61,
                            99.53,
                            99.14,
                            99.75,
                            99.46,
                            99.55
                        ],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)'
                    }
                ]
            }
        });
    }

    render() {
        const { user } = this.props;

        const localLogin = (
            <button onClick={() => this.props.history.push("/login")}>Login</button>
        )

        return (
            <div className="wrapper">
                <ScoreCard 
                    chartData1={this.state.chartData1}
                    chartData2={this.state.chartData2}
                    chartData3={this.state.chartData3}
                    chartData4={this.state.chartData4}
                />
                <Dashboard />
                <Statistics />
            </div>
        );
    }
}

export default Profile;
