import React from 'react';
import {
    NavLink, Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <div className='logo'>
                    <img src={process.env.PUBLIC_URL + '/admin/logo_kamikaze.png'} alt="" style={{cursor:"pointer"}}/>
                </div>
            </Link>
            <div className="routes">
                <NavLink className='nav--route' to="/admin/accounts">
                    <img src={process.env.PUBLIC_URL + '/admin/nav-bar/acc.png'} alt="" />
                    <span to="/admin/accounts">Danh sách tài khoản</span>
                </NavLink>
                <NavLink className='nav--route' to="/admin/create-account">
                    <img src={process.env.PUBLIC_URL + '/admin/nav-bar/add-acc.png'} alt="" />
                    <span>Tạo tài khoản</span>
                </NavLink>
                <NavLink className='nav--route' to="/admin/shop">
                    <img src={process.env.PUBLIC_URL + '/admin/nav-bar/book-manage.png'} alt="" />
                    <span to="/admin/shop">Quản lý sách</span>
                </NavLink>
                <NavLink className='nav--route' to="/admin/stocks">
                    <img src={process.env.PUBLIC_URL + '/admin/nav-bar/warehouse.png'} alt="" />
                    <span to="/admin/stocks">Quản lý kho</span>
                </NavLink>
            </div>

        </nav>
    )
}

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