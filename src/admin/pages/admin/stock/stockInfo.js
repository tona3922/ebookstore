import React, { Component } from 'react'
import "./stock.scss"

export default class StockInfo extends Component {
    render() {
        return (
            <div className="stock-card">
                <img src={process.env.PUBLIC_URL + "/admin/stock/" + this.props.stock.img} className="stock-image" alt=""></img>
                <div className="stock-info">
                    <h1 className="stock-name">{this.props.stock.stockName}</h1>
                    <h1 className="quantity">Sức chứa: {this.props.stock.quantity}</h1>
                    <h1 className="stocking">Số sách trong kho: {this.props.stock.stocking}</h1>
                </div>
            </div>
        )
    }
}
