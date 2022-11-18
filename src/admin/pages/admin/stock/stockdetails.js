import React, { Component } from 'react'
import "./stock.scss"
import Header from "../../../comp/header/header"
import Table from "../customer/table"
import {
    useParams,
    withRouter,
} from "react-router-dom";

export default function StockDetails(props) {
    const id = useParams()
    const stock = props.stock(id.id)
    let quantity = 0
    for (let i = 0; i < stock.booklist.length; i++) {
        quantity += parseInt(stock.booklist[i][2])
    }
    return (
        <div className="pop-up">
            <div className="pop-up-page">
                <Header title={stock.stockName} searchbarPH="" quantity={quantity} />

                {/* <Table header={props.tableHeader} info={props.stock()} /> */}
                <div className="table-container"><Table header={props.tableHeader} type="pop-up" info={stock.booklist} /></div>

            </div>
        </div>
    )
}

// export default class StockDetails extends Component {
//     render() {
//         // const id = useParams()
//         console.log(this.props)
//         return (
//             <div className="pop-up">
//                 <div className="pop-up-page">
//                     <Header title="Nhà Kho A" searchbarPH="" quantity={0} />
//                     {/* <Table /> */}
//                 </div>
//             </div>
//         )
//     }
// }

// const StockDetailsWithRouter = withRouter(StockDetails);
