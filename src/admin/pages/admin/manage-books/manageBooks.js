import React, { Component } from 'react'
import Header from '../../../comp/header/header.js'
import Books from '../../../comp/Books/main.js'
// import Table from './table'
export default class ManageBooks extends Component {
    render() {
        return (
            <div className="main">
                <Header title="Quản lý sách trong tiệm" searchbarPH="Tìm kiếm sách" addBook={1} />
                {/* <div className="content"><Table /></div> */}
                <Books />
            </div>
        )
    }
}
