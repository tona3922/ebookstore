import React, { Component } from 'react'
import ListOrderHeader from './listorderheader.js'
import Table from './table'

export default class ListOrder extends Component {
    render() {
        return (
            <div className="manager--main">
                <ListOrderHeader />
		<div className="manager--content"><Table /></div>
            </div>
        )
    }
}

// <Header title="Xem danh sách đơn hàng" searchbarPH="Nhập mã đơn hàng" />

// <div className="content"><Table /></div>