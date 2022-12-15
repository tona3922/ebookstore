import React, { Component, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from './table'
import SearchDate from './searchDate'
import SearchCode from './searchCode'

export default function StatisticProduct() {
    const [code, setCode] = useState("")
    const [datePair, setDatePair] = useState({
        from: "",
        to: ""
    })

    return (
        <div className="s--p">
    <div className="statistic--order">
        <h3>Thống kê theo sản phẩm</h3>
            </div>
    
    <SearchCode setCodeSearched={setCode}/>
    <SearchDate setFromTo={setDatePair}/>
    <Table code={code} datePair={datePair}/>
</div>
    )
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