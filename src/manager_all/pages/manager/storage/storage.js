import React, { Component } from 'react'
import StorageHeader from './storageheader'
import StorageContent from './storagecontent'
import StorageTable from './storagetable'

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

// <Header title="Xem danh sách đơn hàng" searchbarPH="Nhập mã đơn hàng" />
// <div className="content"><Table /></div>