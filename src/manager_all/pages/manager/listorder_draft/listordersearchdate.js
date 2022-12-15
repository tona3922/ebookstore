import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class ListOrderSearchDate extends Component {
    render() {
        return (
            <div className="searchdate--container">
                <form >
                    <input type="text" placeholder={"Từ ngày"} />
			<input type="text" placeholder={"Đến ngày"} />
                    <button type="button" className="button">Search</button>
                </form>
            </div >
	
        )
    }
}

/*
	<input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả đơn hàng</label>
	<div className="searchdate--container">
                <div className="searchdate--input">
                    <input type="text" placeholder={"Từ ngày"} />
		</div>
		<div className="searchdate--input">
			<input type="text" placeholder={"Đến ngày"} />
		</div>
		<div className="searchdate--input">
                    <button type="button" className="button">Search</button>
                </div>
            </div >


<div className="multi-inputs">
                <div className="input" style={{ "width": "25%" }}>
                        <input type="text" className="input-field" />
                        <label className="input-label">Ngày bắt đầu</label>
                    </div>
		<div className="input" style={{ "width": "25%" }}>
                        <input type="date" className="input-field" value="1990-01-01" required />
                        <label className="input-label">Ngày kết thúc</label>
                    </div>
		</div>
*/
