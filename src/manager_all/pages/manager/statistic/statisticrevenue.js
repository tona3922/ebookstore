import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RevenueContent from './revenuecontent'
import RevenueLineChart from './revenuelinechart'

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

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>