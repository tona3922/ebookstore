import React, { Component } from 'react'
import StatisticHeader from './statisticheader.js'
import StatisticRevenue from './statisticrevenue.js'
import StatisticOrder from './statisticorder.js'
import StatisticProduct from './statisticproduct.js'

export default class Statistic extends Component {
    render() {
        return (
            <div className="manager--main">
                <StatisticHeader />
            </div>
        )
    }
}

/*
	<div className="top--header">
			<StatisticOrder />
		</div>
*/
// <Header title="Xem danh sách đơn hàng" searchbarPH="Nhập mã đơn hàng" />
// <div className="content"><Table /></div>
/*
<div className="top--header">
			<StatisticOrder />
		</div>
		<div className="top--header">
			<StatisticRevenue />
		</div>
		<div className="top--header">
			<StatisticProduct />
		</div>
*/