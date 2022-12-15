import React, { Component , useState } from 'react'

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

export default function StorageTable (props) {
    const {codeSearched} = props

    return (
        <>
            { (codeSearched === "Hoàng tử bé" ||  codeSearched === "9781853261589") &&
                <div className="divTable">
                    <div className="divTableBody">
                            <TableRow type="header" info={["No.", "Mã kho", "Tên kho", "Số điện thoại", "Số lượng"]} />
                            <TableRow type="row" info={["1", "KH0001", "Kho A - Số 13, Trần Hưng Đạo, Phường 6, Quận Phú Nhuận, TP.HCM", "0987654321", "100"]} />
                            <TableRow type="row" info={["2", "KH0002", "Kho B - Số 15, Trường Chinh, Phường 12, Quận 9, TP.HCM", "0987654321", "250"]} />
                            <TableRow type="row" info={["3", "KH0003", "Kho C - Số 159, Hoàng Văn Thụ, Phường 10, Quận 7, TP.HCM", "0123123123", "100"]} />
                            <TableRow type="row" info={["", "", "Tổng", "", "450"]} />
                    </div>
                </div>
            }
            { (codeSearched === "9786042268127" ||  codeSearched === "Chú thuật hồi chiến - Tập 1") &&
            <div className="divTable">
                <div className="divTableBody">
                        <TableRow type="header" info={["No.", "Mã kho", "Tên kho", "Số điện thoại", "Số lượng"]} />
                        <TableRow type="row" info={["1", "KH0001", "Kho A - Số 13, Trần Hưng Đạo, Phường 6, Quận Phú Nhuận, TP.HCM", "0987654321", "100"]} />
                        <TableRow type="row" info={["2", "KH0002", "Kho C - Số 159, Hoàng Văn Thụ, Phường 10, Quận 7, TP.HCM", "0123123123", "150"]} />
                        <TableRow type="row" info={["", "", "Tổng", "", "250"]} />
                </div>
            </div>
            }        
            <div>
            { codeSearched !== "9786042268127" && codeSearched !== "Chú thuật hồi chiến - Tập 1" &&  codeSearched !== "9781853261589" &&  codeSearched !== "Hoàng tử bé" && codeSearched === "" &&
                <p style={{textAlign:'center'}}>
                    Vui lòng nhập mã ISBN!
                </p>
            }
            { codeSearched !== "9786042268127" && codeSearched !== "Chú thuật hồi chiến - Tập 1" &&  codeSearched !== "9781853261589" &&  codeSearched !== "Hoàng tử bé" &&  codeSearched !== "" &&
                <p style={{textAlign:'center'}}>
                    Sách không tồn tại!
                </p>
            }
            </div>
        </>
    )
};
/*
export default class StorageTable extends Component {
    render() {
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <TableRow type="header" info={["No.", "Mã kho", "Tên kho", "Số điện thoại", "Số lượng"]} />
			<TableRow type="row" info={["1", "KH0001", "Kho A - Số 13, Trần Hưng Đạo, Phường 6, Quận Phú Nhuận, TP.HCM", "0987654321", "100"]} />
                    <TableRow type="row" info={["2", "KH0002", "Kho B - Số 15, Trường Chinh, Phường 12, Quận 9, TP.HCM", "0987654321", "250"]} />
                    <TableRow type="row" info={["3", "KH0003", "Kho C - Số 159, Hoàng Văn Thụ, Phường 10, Quận 7, TP.HCM", "0123123123", "100"]} />
                    <TableRow type="row" info={["", "", "Tổng", "", "450"]} />
                </div>
            </div>
        )
    }
};
*/
/*
                    <TableRow type="row" info={["1", "DH10100", "Trần Chí Công", "0123456789", "120.000", "Đang chuẩn bị", <Option />]} />
                    <TableRow type="row" info={["2", "DH10101", "Hoàng Kim Cương", "0987654321", "250.000", "Đang giao hàng", <Option />]} />
                    <TableRow type="row" info={["3", "DH10102", "Võ Thái Toàn", "0123123123", "300.000", "Đã giao hàng", <Option />]} />
                    <TableRow type="row" info={["4", "DH10103", "Lê Hoàng Ngọc Phát", "0456456456", "200.000", "Đã giao hàng", <Option />]} />
*/
