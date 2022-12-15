import React, { Component } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2'

const data = {
    labels: ["04/10/2022", "05/10/2022", "06/10/2022", "07/10/2022", "08/10/2022", "09/10/2022", "10/10/2022"],
    datasets: [
        {
            label: "Doanh thu",
            data: [50000, 65000, 79000, 80000, 100000, 120000, 160000],
            fill: false,
            backgroundColor: '#03045E',
            borderColor: '#03045E',
            tension: 0
        }
    ]
};

export default class RevenueLineChart1 extends Component {
    render() {
        return (
            <div className="line--chart">
                <Line data={data} />
            </div>
        )
    }
}
