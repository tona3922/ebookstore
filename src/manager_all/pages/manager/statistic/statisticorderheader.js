import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import Table from './table'
// import OrderContent from './ordercontent'
// import OrderLineChart from './orderlinechart'
import SearchDate from './searchDate.js'

export default function StatisticOrderHeader(props) {
    const {setFromTo} = props

    return (
    		<div className="statistic--order">
				<h3>Thống kê theo số lượng đơn hàng</h3>
        		<SearchDate setFromTo={setFromTo}/>
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