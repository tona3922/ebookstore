import React from 'react'
import ListOrderSearchBar from './listordersearchbar'
import ListOrderSearchDate from './listordersearchdate'
import '../../../styles/index_manager.scss'
import '../../../styles/table_manager.scss'

export default function ListOrderHeader(props) {
    const {setCodeSearched, setFromTo} = props

    return (
<>
    <div className="manager--top--header">
        <h1>Xem danh sách đơn hàng</h1>
        <ListOrderSearchBar setCodeSearched={setCodeSearched}/>
    </div>
    <div className="manager--top--header">
        <ListOrderSearchDate setFromTo={setFromTo}/>
    </div>
</>
    )
}

// 
// <ListOrderSearchDate />

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