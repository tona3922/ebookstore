import "./viewbook.css";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"

const cartContains = (cart, bookId) => {
    for (let i = 0; i < cart.length; ++i) {
      if (cart[i]._id === bookId) {
        return true
      }
    }
  
    return false
  }
const getQty = (cart, bookId) => {
    for (let i = 0; i < cart.length; ++i) {
        if (cart[i]._id === bookId) {
        return cart[i].qty
        }
    }

    return 0  
}

const AddButton = (props) => {
    const {cartItems, onDecrease, onIncrease, product} = props

    return (
    <>
    { cartContains(cartItems, product._id) === false &&
        <button 
        className="shopping-bag"
        onClick={() => onIncrease(product)}
        >
            Add to cart <FaShoppingBag />
        </button>
        }  
        { cartContains(cartItems, product._id) &&
        <>
        <button 
        className="shop-button"
        onClick={() => onDecrease(product)}
        >
            <AiFillMinusCircle />
        </button>
        <button style={{borderRadius:'10px', background:'pink'}}>{getQty(cartItems, product._id)}</button>
        <button 
        className="shop-button"
        onClick={() => onIncrease(product)}
        >
            <AiFillPlusCircle />
        </button>
        </>
        }  
    </>          
    )
}

export default AddButton