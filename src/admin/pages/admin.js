import React from "react"
import Nav from "../comp/Nav/nav"
// import Main from "../comp/Books/main"
// import Header from "../comp/header/header"
import Customers from "./admin/customer/customers"
import CreateAccount from "./admin/create-account/createAccount"
import ManageBooks from "./admin/manage-books/manageBooks"
import Stock from "./admin/stock/stock"
import "../styles/index.scss"
import "../styles/table.scss"
import {
    BrowserRouter,
    Routes as Switch,
    Route,
    // Link
} from "react-router-dom";

export default function App() {
    return (
        <div className="page">
            <Nav />
            <Switch>
                <Route path="/accounts" element={<Customers />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/shop" element={<ManageBooks />} />
                <Route path="/stocks/*" element={<Stock />} />
            </Switch>
        </div>
    )
}