import React from "react"
import Navbar from "../comp/Nav/nav"
// import Main from "../comp/Books/main"
// import Header from "../comp/header/header"
import ListOrder from "./manager/listorder/listorder"
import Statistic from "./manager/statistic/statistic"
import Storage from "./manager/storage/storage"

import "../styles/index_manager.scss"
import "../styles/table_manager.scss"

import {
    BrowserRouter,
    Routes as Switch,
    Route,
    // Link
} from "react-router-dom";

export default function Manager() {
    return (
        <div className="manager--page">
     
                <Navbar />
                <Switch>
                    <Route path="/listorder" element={<ListOrder />} />
                    <Route path="/statistic/*" element={<Statistic />} />
                    <Route path="/storage" element={<Storage />} />
                </Switch>
           
        </div>
    )
}