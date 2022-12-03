import React, { Component } from 'react'
// import "./stock.scss"
import Header from "../header/header"
import AddBookForm from "../Form/addbook-form"
// import Table from "../customer/table"
import {
    useParams,
    withRouter,
} from "react-router-dom";

export default function BookDetails(props) {
    const id = useParams()
    // const stock = props.stock(id.id)
    // let quantity = 0
    // for (let i = 0; i < stock.booklist.length; i++) {
    //     quantity += parseInt(stock.booklist[i][2])
    // }
    // console.log(id)
    return (
        <div className="pop-up">
            <div className="pop-up-page">
                <Header title="Thêm sách vào cửa hàng" searchbarPH="" />
                {/* <Table header={props.tableHeader} info={props.stock()} /> */}
                <AddBookForm />

            </div>
        </div>
    )
}