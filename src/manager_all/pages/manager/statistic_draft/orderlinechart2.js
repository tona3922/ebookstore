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
    labels: ["01/10/2022", "02/10/2022", "03/10/2022", "04/10/2022", "05/10/2022", "06/10/2022", "07/10/2022"
            , "08/10/2022", "09/10/2022", "10/10/2022", "11/10/2022", "12/10/2022", "13/10/2022", "14/10/2022", "15/10/2022"
            , "16/10/2022", "17/10/2022", "18/10/2022", "19/10/2022", "20/10/2022", "21/10/2022", "22/10/2022", "23/10/2022"
            , "24/10/2022", "25/10/2022", "26/10/2022", "27/10/2022", "28/10/2022", "29/10/2022", "30/10/2022", "31/10/2022"
        ],
    datasets: [
        {
            label: "Số lượng đơn hàng",
            data: [0, 1, 1, 3, 2, 3, 5, 7, 12, 16, 11, 20, 23, 30, 22, 16, 26, 34, 17, 18, 18, 18, 19, 20, 60, 15, 30, 32, 34, 27, 21],
            fill: false,
            backgroundColor: '#03045E',
            borderColor: '#03045E',
            tension: 0
        }
    ]
};

export default class OrderLineChart2 extends Component {
    render() {
        return (
            <div className="line--chart">
                <Line data={data} />
            </div>
        )
    }
}
