import React, { Component } from 'react'
import SearchBar from './searchbar'
import "./header.scss"
import {
    Link
} from "react-router-dom"

export default class Header extends Component {
    render() {
        console.log(this.props.searchbarPH)
        return (
            <div className="top--header">
                <h1>{this.props.title}</h1>
                {(this.props.quantity !== 0 || typeof this.props.quantity != 'undefined') && <h6>{this.props.quantity}</h6>}
                {typeof this.props.addBook != 'undefined' &&
                    <Link className="addbook-link" to={"/admin/shop/addbook/"}>
                        <button type="button" className="add--book">
                            <img src={process.env.PUBLIC_URL + "/admin/table/admin-option/import.png"} alt=""></img>
                            <h6>THÊM SÁCH</h6>
                        </button>
                    </Link>}
                {(this.props.searchbarPH !== "") && <SearchBar searchbarPH={this.props.searchbarPH} />}
            </div>

        )
    }
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