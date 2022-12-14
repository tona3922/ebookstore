import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import StatisticOrder from './statisticorder'
import StatisticRevenue from './statisticrevenue'
import StatisticProduct from './statisticproduct'
import {
    Link,
    Routes as Switch,
    Route,
} from "react-router-dom";

export default class StatisticDropdown extends Component {
    render() {
        return (
            <div className="dropdown--container">
		<div class="dropdown">
  			<button class="dropbtn">Chọn loại thống kê</button>
  			<div class="dropdown-content">
    				<Link className="abc" to='/manager/statistic/order'>Số lượng đơn hàng</Link>
				<Link className="abc" to='/manager/statistic/revenue'>Doanh thu</Link>
				<Link className="abc" to='/manager/statistic/product'>Sản phẩm</Link>
  			</div>
		</div>
		
		<Switch>
                    <Route
                        path="/order/"
                        element={<div className="statistic--pop">
					<StatisticOrder />
				</div>}
                    />
                </Switch>
		
		<Switch>
                    <Route
                        path="/revenue/"
                        element={<div className="statistic--pop">
					<StatisticRevenue />
				</div>}
                    />
                </Switch>

		<Switch>
                    <Route
                        path="/product/"
                        element={<div className="statistic--pop">
					<StatisticProduct />
				</div>}
                    />
                </Switch>
            </div >
        )
    }
}

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
// <Link className="a" to={"/statistic"}>Số lượng đơn hàng</a>
// <a href="#">Số lượng đơn hàng</a>
// <a href="#">Doanh thu</a>
// <a href="#">Sản phẩm</a>