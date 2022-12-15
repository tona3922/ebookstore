import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

// const a = [0, 1, 1, 3, 2, 3, 5, 7, 12, 16, 11, 20, 23, 30, 22, 16, 26, 34, 17, 18, 18, 18, 19, 20, 60, 15, 30, 32, 34, 27, 21]

/*
const function sumArr(arr) {
	let sum = 0;
	let i = 0;
	while (i < arr.length) {
		sum += arr[i];
		i = i + 1;
	}
	return sum;
}
*/

class SumOfOrder extends Component {
    render() {
        return (
		<div className="aac">
			<p>561</p>
		</div>
        );
    }
};

class AvgOfOrder extends Component {
    render() {
        return (
		<div className="aac">
			<p>18.1</p>
		</div>
        );
    }
};


export default class OrderContent2 extends Component {
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