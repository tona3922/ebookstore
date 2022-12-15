//import { type } from '@testing-library/user-event/dist/type';
import React, { Component, useState } from 'react'
// import DateObject from "react-date-object";

class Option extends Component {
    render() {
        return (
		<div className="m--option">
            <button type="button" className="edit"><img src={require('../../../image/managerimage/table/m-option/edit.png')} alt=""></img>Chỉnh trạng thái</button>
            <button type="button" className="delete"><img src={require('../../../image/managerimage/table/m-option/del.png')} alt=""></img>Huỷ đơn hàng</button>
        </div>
        );
    }
};



class TableRow extends Component {
    render() {
        let key = 0;
        console.log(this.props.info);
        return (
            <div className={this.props.type}>
                {
                    this.props.info.map(infoPiece => {
                        return (infoPiece === "Tùy chọn" && this.props.type === "row") ? <div className="divTableCell" key={key++}><Option /></div> :
                            <div className="divTableCell" key={key++}>{infoPiece}</div>;
                    })
                }
                {/* <div class="divTableCell">&nbsp;Họ v&agrave; t&ecirc;n</div>
                <div class="divTableCell">&nbsp;Số CMND</div>
                <div class="divTableCell">&nbsp;Loại t&agrave;i khoản</div>
                <div class="divTableCell">&nbsp;T&ugrave;y chọn</div> */}
            </div>
        )
    }
};

export default function Table (props) {
    const {orders, codeSearched, datePair} = props

    return (
        <>
        <div className="divTable">
            <div className="divTableBody">
                {codeSearched === "" && 
                <TableRow type="header" info={["No.", "Mã đơn hàng", "Tên khách hàng", "Số điện thoại", "Tổng tiền", "Ngày", "Trạng thái", "Tuỳ chọn"]} />
                }   
                { codeSearched === "" && Array.from(orders.keys()).map((orderCode, index) => {
                    let value = orders.get(orderCode)
                    let temp = [...value]
                    if (datePair.from != "" && datePair.to == "") { // ngày trái bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let leftBoundDate = new Date(datePair.from)
                        if (orderDate.getTime() < leftBoundDate.getTime()) {
                            return <></>
                        }
                    } else if (datePair.from == "" && datePair.to != "") { // ngày phải bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let rightBoundDate = new Date(datePair.to)
                        if (orderDate.getTime() > rightBoundDate.getTime()) {
                            return <></>
                        }
                    } else if (datePair.from != "" && datePair.to != "") { // hai đầu bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let leftBoundDate = new Date(datePair.from)
                        let rightBoundDate = new Date(datePair.to)
                        if (orderDate.getTime() > rightBoundDate.getTime() || orderDate.getTime() < leftBoundDate.getTime()) {
                            return <></>
                        }
                    }
                    temp.unshift(orderCode)
                    temp.unshift(index + 1)
                    temp.push(<Option />)
                    return <TableRow type="row" info={temp}/>;
                })}      
                { codeSearched !== "" && orders.has(codeSearched) && 
                <TableRow type="header" info={["No.", "Mã đơn hàng", "Tên khách hàng", "Số điện thoại", "Tổng tiền", "Ngày", "Trạng thái", "Tuỳ chọn"]} />
                }  
                { codeSearched !== "" && orders.has(codeSearched) && Array.from(orders.keys()).map((orderCode) => {
                    if (codeSearched === orderCode) {
                        let value = orders.get(orderCode)
                        let temp = [...value]
                    if (datePair.from != "" && datePair.to == "") { // ngày trái bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let leftBoundDate = new Date(datePair.from)
                        if (orderDate.getTime() < leftBoundDate.getTime()) {
                            return <></>
                        }
                    } else if (datePair.from == "" && datePair.to != "") { // ngày phải bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let rightBoundDate = new Date(datePair.to)
                        if (orderDate.getTime() > rightBoundDate.getTime()) {
                            return <></>
                        }
                    } else if (datePair.from != "" && datePair.to != "") { // hai đầu bị chặn
                        let orderDate = temp[3]
                        orderDate = new Date(orderDate)
                        let leftBoundDate = new Date(datePair.from)
                        let rightBoundDate = new Date(datePair.to)
                        if (orderDate.getTime() > rightBoundDate.getTime() || orderDate.getTime() < leftBoundDate.getTime()) {
                            return <></>
                        }
                    }
                        temp.unshift(orderCode)
                        temp.unshift(1)
                        temp.push(<Option />)
                        return <TableRow type="row" info={temp}/>;
                    } else {
                        return <></>
                    }
                })}
            </div>
        </div>
        <div>
        { codeSearched !== "" && !orders.has(codeSearched) && 
        <p style={{textAlign:'center'}}>
            Mã đơn hàng không tồn tại
        </p>
        }
        </div>
        </>
    )
};

/*
                    <TableRow type="row" info={["1", "DH10100", "Trần Chí Công", "0123456789", "120.000", "Đang chuẩn bị", <Option />]} />
                    <TableRow type="row" info={["2", "DH10101", "Hoàng Kim Cương", "0987654321", "250.000", "Đang giao hàng", <Option />]} />
                    <TableRow type="row" info={["3", "DH10102", "Võ Thái Toàn", "0123123123", "300.000", "Đã giao hàng", <Option />]} />
                    <TableRow type="row" info={["4", "DH10103", "Lê Hoàng Ngọc Phát", "0456456456", "200.000", "Đã giao hàng", <Option />]} />
*/
