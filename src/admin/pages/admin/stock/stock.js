import React, { Component } from 'react'
import Header from '../../../comp/header/header.js'
// import Table from '../customer/table'
import StockInfo from './stockInfo.js'
import StockDetails from './stockdetails.js';

import {
    Link,
    Routes as Switch,
    Route,
} from "react-router-dom";

export default class Stock extends Component {
    state = {
        header: ["", "Tên sách", "Số lượng trong kho", "Nhà xuất bản", "Tác giả", "Tùy chọn"],
        stock: [
            {
                key: 0,
                img: "stock.png",
                stockName: 'Nhà kho A',
                quantity: 1000,
                stocking: 500,
                booklist: [
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hòn đá Phù thủy", "122", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Phòng chứa Bí mật", "120", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Tên Tù nhân Ngục Azkaban", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Chiếc cốc lửa", "58", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hội Phượng hoàng", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hoàng tử lai", "0", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"]
                ]
            },
            {
                key: 1,
                img: "stock.png",
                stockName: 'Nhà kho B',
                quantity: 2000,
                stocking: 400,
                booklist: [
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hòn đá Phù thủy", "22", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Phòng chứa Bí mật", "120", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Tên Tù nhân Ngục Azkaban", "0", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Chiếc cốc lửa", "58", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hội Phượng hoàng", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hoàng tử lai", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hòn đá Phù thủy", "22", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Phòng chứa Bí mật", "120", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Tên Tù nhân Ngục Azkaban", "0", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Chiếc cốc lửa", "58", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hội Phượng hoàng", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"],
                    [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Harry Potter và Hoàng tử lai", "100", "NXB Trẻ", "J.K. Rowling", "Nhập hàng"]
                ]
            }
        ]
    }

    getStock = (id) => {
        return this.state.stock[id]
    }

    render() {
        return (
            <div className="main">
                <Header title="Quản lý kho" quantity={this.state.stock.length} searchbarPH="" />
                <div className="stock">

                    {
                        this.state.stock.map((stock, index) => {
                            return <Link className="stock-link" to={"/admin/stocks/" + index}><StockInfo key={index} stock={stock} /></Link>;
                        })
                    }
                </div>
                <Switch>
                    <Route
                        path="/:id/*"
                        element={<StockDetails tableHeader={this.state.header} stock={this.getStock} />}
                    />
                </Switch>
            </div>
        )
    }
}
