import React, { Component } from 'react'

class Option extends Component {
    render() {
        return (
		<div className="m--option">
                <button type="button" className="edit"><img src={process.env.PUBLIC_URL + "/managerimage/table/m-option/edit.png"} alt=""></img>Chỉnh trạng thái</button>
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
                    <TableRow type="header" info={["No.", "Ngày", "Mã ISBN", "Tên sản phẩm", "Số lượng bán", "Doanh thu"]} />
                    <TableRow type="row" info={["1", "05/10/2022", "9781853261589", "Hoàng tử bé", "2", "200000"]} />
                    <TableRow type="row" info={["2", "05/10/2022", "9786042268127", "Chú thuật hồi chiến - Tập 1", "15", "300000"]} />
                    <TableRow type="row" info={["3", "05/10/2022", "9786042247870", "Học viện siêu anh hùng - Tập 1", "10", "250000"]} />
			<TableRow type="row" info={["", "", "", "Tổng", "27", "750000"]} />
                </div>
            </div>
        )
    }
};

// 
