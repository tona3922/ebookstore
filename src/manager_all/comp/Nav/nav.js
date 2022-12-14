import React from 'react';
import {
    Link, NavLink, BrowserRouter
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <div className='manager--logo' style={{cursor: "pointer"}}>
                    <img src={require('../../image/managerimage/logo_kamikaze.png')} alt="Error!" />
                </div>
            </Link>
            <div className="manager--routes">
                <NavLink className='manager--nav--route' to="/manager/listorder">
                    <img src={require('../../image/managerimage/nav-bar/listorder.png')} alt="O" />
                    <span to="/listorder">Danh sách đơn hàng</span>
                </NavLink>

                <NavLink className='manager--nav--route' to="/manager/statistic">
                    <img src={require('../../image/managerimage/nav-bar/statistic.png')} alt="S" />
                    <span to="/statistic">Thống kê bán hàng</span>

                </NavLink>
                <NavLink className='manager--nav--route' to="/manager/storage">
                    <img src={require('../../image/managerimage/nav-bar/storage.png')} alt="E" />
                    <span to="/storage">Kho hàng</span>
                </NavLink>
            </div>
        </nav>
    )
}
/*
		<div className='nav--account'>
                    <button type="button" class="nav--account--button">
                        <img src={process.env.PUBLIC_URL + '/admin/nav-bar/account.png'} alt="A"></img>
                        <span> CAO KHOA </span>
                    </button>
                </div>
		<NavLink className='nav--route' to="/admin/shop">
                    <img src={process.env.PUBLIC_URL + '/admin/nav-bar/storage.png'} alt="" />
                    <span to="/admin/shop">Xem danh sách kho hàng</span>
                </NavLink>

                <div className='nav--account'>
                    <button type="button" class="nav--account--button" data-bs-toggle="dropdown">
                        <img src={process.env.PUBLIC_URL + '/admin/nav-bar/account.png'} alt="A"></>
                        <span> CAO KHOA </span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                    </ul>
                </div>

*/
// import {

// }
// import logo from "../../img/logo_kamikaze.png";
// import {Fahome} from "react-icon/fa";
// import {FaHome,FaShoppingBag} from 'react-icons/fa';
// import } from "react-icon/fa";

// class App extends React.Component {
//     constructor() {
//       super();

//       this.state = {
//         inputValue: 'Harry Potter'
//       };

//       this.onInputChange = this.onInputChange.bind(this);
//     }

//     onInputChange(e) {
//       const { value } = e.target;

//       this.setState({
//         inputValue: value
//       });
//     }

//     render() {
//       const { inputValue } = this.state;

//       return (
//         <div className='input-wrapper'>
//           <input
//             onChange={this.onInputChange}
//             placeholder='Search...'
//             value={inputValue}
//             spellCheck={false}
//             />
//           <span className='input-highlight'>
//             { inputValue.replace(/ /g, "\u00a0") }
//           </span>
//         </div>
//       );
//     }
//   }