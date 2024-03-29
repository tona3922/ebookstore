import "./style.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./navbar/home/home";
import { Cart } from "./navbar/cart/cart";
import { Login } from "./authen/login";
import { Signup } from "./authen/singup";
import { Register_info } from "./authen/register_info";
import { Profile } from "./profile_management/profile";
import { Activity } from "./profile_management/activities";
import Admin from "./admin/pages/admin";
import { useState } from "react";
import { AllBook } from "./navbar/home/allbook";
import { Htl } from "./navbar/home/hightolow";
import { Lth } from "./navbar/home/lowtohigh";
import { Products } from "./navbar/home/products";
import { Review } from "./navbar/home/review";
import { Adventure } from "./navbar/home/book genre/adventure";
import { Comic } from "./navbar/home/book genre/comic";
import { Fiction } from "./navbar/home/book genre/fiction";
import { Novel } from "./navbar/home/book genre/novel";
import { Science } from "./navbar/home/book genre/science";
import { Search } from "./navbar/home/search";
import { Feedback } from "./navbar/home/feedback";
import { ViewOrderData } from "./manager_all/pages/manager/viewdata/orderdata";
import Manager from "./manager_all/pages/manager_pages";
import ConfirmOrder from "./navbar/cart/confirm_order";
import { Lthnovel } from "./navbar/home/book genre/lthnovel";
import { Htlnovel } from "./navbar/home/book genre/htlnovel";
import { Lthadventure } from "./navbar/home/book genre/lthadventure";
import { Htladventure } from "./navbar/home/book genre/htladventure";
import { Lthcomic } from "./navbar/home/book genre/lthcomic";
import { Htlcomic } from "./navbar/home/book genre/htlcomic";
import { Lthfiction } from "./navbar/home/book genre/lthfiction";
import { Htlfiction } from "./navbar/home/book genre/htlfiction";
import { Lthscience } from "./navbar/home/book genre/lthscience";
import { Htlscience } from "./navbar/home/book genre/htlscience";

// import Data from "./navbar/home/data.json";

function App() {
  // KT đăng nhập

  const RedirectPageAdmin = function () {
    if (localStorage.getItem("role") === "admin") {
      return <Admin />;
    } else {
      return <Navigate to="/" />;
    }
  };

  const RedirectPageManager = function () {
    if (localStorage.getItem("role") === "manager") {
      return <Manager />;
    } else {
      return <Navigate to="/" />;
    }
  };

  const RedirectActivity = function () {
    if (localStorage.getItem("accessToken")) {
      if (localStorage.getItem("role") === "guest") return <Activity />;
      else return <Navigate to="/" />;
    } else return <Navigate to="/signin" />;
  };
  //
  const [cartItems, setCartItems] = useState([]);
  const [userInfo] = useState({
    name: "Nguyễn Văn A",
    address: "1, Lê Duẩn, P.1, Q.1, TP.HCM",
    phone: "0909090909",
    method: "0",
  });
  // chưa có kiểm tra số lượng còn lại của sách
  const onIncrease = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onDecrease = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x._id !== product._id));
  };
  const onDeleteAll = () => {
    setCartItems(() => []);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          {/* <Route path="/#footer" element={<Contact />} /> */}
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/info_reg" element={<Register_info />} />
          <Route
            path="/allbook"
            element={
              <AllBook
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Products
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lth"
            element={
              <Lth
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htl"
            element={
              <Htl
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lthnovel"
            element={
              <Lthnovel
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htlnovel"
            element={
              <Htlnovel
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lthadventure"
            element={
              <Lthadventure
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htladventure"
            element={
              <Htladventure
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lthcomic"
            element={
              <Lthcomic
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htlcomic"
            element={
              <Htlcomic
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lthfiction"
            element={
              <Lthfiction
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htlfiction"
            element={
              <Htlfiction
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/lthscience"
            element={
              <Lthscience
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/:name/htlscience"
            element={
              <Htlscience
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/feedback/:id" element={<Feedback />} />
          {/* <Route path="/admin/*" element={<Admin />} /> */}
          <Route path="/review/:_id" element={<Review />} />
          <Route
            path="/admin/*"
            element={
              localStorage.getItem("accessToken") ? (
                RedirectPageAdmin()
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          {/* render={() => {
            return localStorage.getItem("accessToken")? <Admin /> : <Navigate to="/signin" />
          }}  */}
          <Route
            path="/adventure"
            element={
              <Adventure
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/comic"
            element={
              <Comic
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/fiction"
            element={
              <Fiction
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/novel"
            element={
              <Novel
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/science"
            element={
              <Science
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            }
          />
          <Route
            path="/profile"
            element={
              localStorage.getItem("accessToken") ? (
                <Profile />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route path="/profile/activities" element={RedirectActivity()} />
          <Route
            path="/confirm_order"
            element={<ConfirmOrder userInfo={userInfo} cartItems={cartItems} />}
          />
          <Route
            path="/manager/*"
            element={
              localStorage.getItem("accessToken") ? (
                RedirectPageManager()
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/manager/orderdata"
            element={
              localStorage.getItem("accessToken") ? (
                localStorage.getItem("role") === "manager" ? (
                  <ViewOrderData />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
