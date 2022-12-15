import React, { Component } from 'react'
import { useState } from 'react'
import StorageHeader from './storageheader'
import StorageContent from './storagecontent'
import StorageTable from './storagetable'

export default function Storage() {
    // const [orders] = useState(orders_);
    const [codeSearched, setCodeSearched] = useState("");
    // const [datePair, setFromTo] = useState({
    //     "from": "",
    //     "to": ""
    // });

    return (
        <div className="manager--main">
            <StorageHeader setCodeSearched={setCodeSearched} />
            <StorageContent />
            <StorageTable codeSearched={codeSearched} />
        </div>
    )
}

/*
export default class Storage extends Component {
    render() {
        return (
            <div className="manager--main">
                <StorageHeader />
		        <StorageContent />
		        <StorageTable />
            </div>
		
        )
    }
}
*/

/*

export default function Storage() {
	const [codeSearched, setCodeSearched] = useState("");
	return (
		<div className="manager--main">
                <StorageHeader setCodeSearched={setCodeSearched}/>
		<StorageContent />
		<StorageTable />
            </div>
	)
}

*/



// <Header title="Xem danh sách đơn hàng" searchbarPH="Nhập mã đơn hàng" />
// <div className="content"><Table /></div>