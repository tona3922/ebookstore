import "./style.scss";
import { Uppernav } from "./navbar/uppernav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./navbar/upper/home";
import { Cart } from "./navbar/upper/cart";
import { Contact } from "./navbar/upper/contact";
import { Signin } from "./navbar/upper/signin";
import { Signup } from "./navbar/upper/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Uppernav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
