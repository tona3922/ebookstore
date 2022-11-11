import "./style.scss";
// import { Uppernav } from "./navbar/uppernav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./navbar/upper/home";
import { Cart } from "./navbar/upper/cart";
import { Contact } from "./navbar/upper/contact";
import { Login } from "./authen/login";
import { Signup } from "./authen/singup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
