import React, { Component } from 'react'

class Option extends Component {
    render() {
        return (
		<div className="m--option">
                <button type="button" className="edit"><img src={require('../../../image/managerimage/table/m-option/edit.png')} alt=""></img>Chỉnh trạng thái</button>
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

export default class Table extends Component {
    render() {
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <TableRow type="header" info={["No.", "Mã đơn hàng", "Tên khách hàng", "Số điện thoại", "Tổng tiền", "Trạng thái", "Tuỳ chọn"]} />
			                    <TableRow type="row" info={["1", "DH10100", "Trần Chí Công", "0123456789", "120.000", "Đang chuẩn bị", <Option />]} />
                    <TableRow type="row" info={["2", "DH10101", "Hoàng Kim Cương", "0987654321", "250.000", "Đang giao hàng", <Option />]} />
                    <TableRow type="row" info={["3", "DH10102", "Võ Thái Toàn", "0123123123", "300.000", "Đã giao hàng", <Option />]} />
                    <TableRow type="row" info={["4", "DH10103", "Lê Hoàng Ngọc Phát", "0456456456", "200.000", "Đã giao hàng", <Option />]} />
                </div>
            </div>
        )
    }
};

/*
                    <TableRow type="row" info={["1", "DH10100", "Trần Chí Công", "0123456789", "120.000", "Đang chuẩn bị", <Option />]} />
                    <TableRow type="row" info={["2", "DH10101", "Hoàng Kim Cương", "0987654321", "250.000", "Đang giao hàng", <Option />]} />
                    <TableRow type="row" info={["3", "DH10102", "Võ Thái Toàn", "0123123123", "300.000", "Đã giao hàng", <Option />]} />
                    <TableRow type="row" info={["4", "DH10103", "Lê Hoàng Ngọc Phát", "0456456456", "200.000", "Đã giao hàng", <Option />]} />
*/
