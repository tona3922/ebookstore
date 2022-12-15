import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import StatisticRevenueHeader from './statisticrevenueheader.js'
import StatisticRevenueContent from './statisticrevenuecontent.js'

export default function StatisticRevenue() {
    const [datePair, setFromTo] = useState({
        "from": "",
        "to": ""
    });

    return (
        <div className="s--r">
            <StatisticRevenueHeader setFromTo={setFromTo}/>
            <StatisticRevenueContent datePair={datePair} />
        </div>
    )
}

/*
export default class StatisticRevenue extends Component {
    render() {
        return (
            <div className="s--r">
		<div className="statistic--order">
			<h3>Thống kê theo doanh thu</h3>
            	</div>

		<div className="statistic--container">
		<form >
                    <input type="text" placeholder={"Từ ngày"} />
			<input type="text" placeholder={"Đến ngày"} />
                    <button type="button" className="button">Search</button>
                </form>

            </div>
		<RevenueLineChart />
		<RevenueContent />
	</div>
        )
    }
}
*/
// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>