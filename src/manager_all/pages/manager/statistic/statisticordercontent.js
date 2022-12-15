// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useState } from 'react'

import OrderContent1 from './ordercontent1'
import OrderLineChart1 from './orderlinechart1'
import OrderContent2 from './ordercontent2'
import OrderLineChart2 from './orderlinechart2'

export default function StatisticOrderContent (props) {
    const {datePair} = props

    return (
        <>
            { datePair.from === "2022-10-04" && datePair.to === "2022-10-10" &&
                <div>
                    <OrderLineChart1 />
					<OrderContent1 />
                </div>
            }
			{ datePair.from === "2022-10-01" && datePair.to === "2022-10-31" &&
                <div>
                    <OrderLineChart2 />
					<OrderContent2 />
                </div>
            }
            <div>
            { datePair.from == "" && datePair.to == "" &&
                <p style={{textAlign:'center'}}>
                    Vui lòng nhập khoảng thời gian cần thống kê!
                </p>
            }
            </div>
        </>
    )
};
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