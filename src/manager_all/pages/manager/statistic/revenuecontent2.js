import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SumOfRev extends Component {
    render() {
        return (
		<div className="aac">
		<p>15.804.000</p>
		</div>
        );
    }
};

class AvgOfRev extends Component {
    render() {
        return (
		<div className="aac">
		<p>509.806</p>
		</div>
        );
    }
};


export default class RevenueContent1 extends Component {
    render() {
        return (
		<>
			<div className="aaa">
				<p> Tổng doanh thu: </p>
				<SumOfRev />
				<p> VNĐ </p>
			</div>
			<div className="aab">
				<p> Doanh thu trung bình:</p>
				<AvgOfRev />
				<p> VNĐ </p>
			</div>
		</>
	)
    }
}

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
// <input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả</label>