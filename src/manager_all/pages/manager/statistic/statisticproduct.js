import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from './table'
export default class StatisticProduct extends Component {
    render() {
        return (
            <div className="s--p">
		<div className="statistic--order">
			<h3>Thống kê theo sản phẩm</h3>
            	</div>
		
		<div className="statistic--container">
		<form >
			<input type="text" placeholder={"Nhập mã ISBN"} />
                    <input type="text" placeholder={"Từ ngày"} />
			<input type="text" placeholder={"Đến ngày"} />
                    <button type="button" className="button">Search</button>
                </form>
            	</div>
		<Table />
	</div>
        )
    }
}

/*
	<div className="statistic--search">
                <form >
                    <input type="text" placeholder={"Nhập mã ISBN"} />
                    <button type="button" className="button">Search</button>
                </form>
            	</div >
*/
// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>