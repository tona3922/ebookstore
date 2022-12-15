import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class ListOrderSearchBar extends Component {
    render() {
        return (
            <div className="search--container">
                <form >
                    <input type="text" placeholder={"Nhập mã đơn hàng"} />
                    <button type="button" className="button">Search</button>
                </form>
            </div >
        )
    }
}

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>