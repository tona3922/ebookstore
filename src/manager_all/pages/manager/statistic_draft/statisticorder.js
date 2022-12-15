import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import Table from './table'
// import OrderContent from './ordercontent'
// import OrderLineChart from './orderlinechart'
import { useState } from 'react'
import StatisticOrderHeader from './statisticorderheader.js'
import StatisticOrderContent from './statisticordercontent.js'

export default function StatisticOrder() {
    const [datePair, setFromTo] = useState({
        "from": "",
        "to": ""
    });

    return (
        <div className="s--c">
            <StatisticOrderHeader setFromTo={setFromTo}/>
            <StatisticOrderContent datePair={datePair} />
        </div>
    )
}

/*
export default class StatisticOrder extends Component {
    render() {
        return (
	<div className="s--c">
		<div className="statistic--order">
			<h3>Thống kê theo số lượng đơn hàng</h3>
            	</div>

		<div className="statistic--container">
		<form >
                    <input type="text" placeholder={"Từ ngày"} />
			<input type="text" placeholder={"Đến ngày"} />
                    <button type="button" className="button">Search</button>
                </form>
            </div >
		<OrderLineChart />
		<OrderContent />
	</div>
	)
    }
}
*/
// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
// <input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả</label>