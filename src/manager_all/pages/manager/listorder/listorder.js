import React from 'react'
import ListOrderHeader from './listorderheader.js'
import Table from './table'
import { useState } from 'react'

const orders_ = new Map([
    ["DH10100", ["Trần Chí Công", "0123456789", 120000, "2022-01-05","Đang chuẩn bị"]],
    ["DH10101", ["Hoàng Kim Cương", "0987654321", 250000, "2022-01-04","Đang giao hàng"]],
    ["DH10102", ["Võ Thái Toàn", "0123123123", 300000, "2022-01-03", "Đã giao hàng"]],
    ["DH10103", ["Lê Hoàng Ngọc Phát", "0456456456", 200000, "2022-01-03", "Đã giao hàng"]]
])

export default function ListOrder() {
    const [orders] = useState(orders_);
    const [codeSearched, setCodeSearched] = useState("");
    const [datePair, setFromTo] = useState({
        "from": "",
        "to": ""
    });

    return (
        <div className="manager--main">
            <ListOrderHeader 
            setCodeSearched={setCodeSearched}
            setFromTo={setFromTo}
            />
            <div className="manager--content">
                <Table 
                orders={orders} 
                codeSearched={codeSearched} 
                datePair={datePair}
                />
            </div>
        </div>
    )
}

// <Header title="Xem danh sách đơn hàng" searchbarPH="Nhập mã đơn hàng" />

// <div className="content"><Table /></div>

/*
const orders_ = new Map([
    ["DH10100", ["Trần Chí Công", "0123456789", 120000, "2022-01-05","Đang chuẩn bị"]],
    ["DH10101", ["Hoàng Kim Cương", "0987654321", 250000, "2021-12-05","Đang giao hàng"]],
    ["DH10102", ["Võ Thái Toàn", "0123123123", 300000, "2021-11-05", "Đã giao hàng"]],
    ["DH10103", ["Lê Hoàng Ngọc Phát", "0456456456", 200000, "2021-10-05", "Đã giao hàng"]]
])
*/