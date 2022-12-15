import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SumOfOrder extends Component {
    render() {
        return (
		<div className="aac">
		<p>10</p>
		</div>
        );
    }
};

class AvgOfOrder extends Component {
    render() {
        return (
		<div className="aac">
		<p>3.3</p>
		</div>
        );
    }
};


export default class OrderContent1 extends Component {
    render() {
        return (
		<>
			<div className="aaa">
				<p> Tổng số lượng đơn hàng: </p>
				<SumOfOrder /> 
			</div>
			<div className="aab">
				<p> Số lượng đơn hàng trung bình:</p>
				<AvgOfOrder />
			</div>
		</>
	)
    }
}

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
// <input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả</label>