import React from "react";
import okIcon from "../../img/button/ok.png";
import returnIcon from "../../img/button/return.png";
import pen from "../../img/pen.png";
import momo from "../../img/home/momo.png";
import bank from "../../img/home/bank.png";
import cash from "../../img/cash.png";
import "./confirm_order.css";
import "./cart.css"; // for reusing mainBox_cart mainButton_cart style
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Note: chưa có đường link trở về trang giỏ hàng, chưa có props thông tin người dùng và mã giỏ hàng

const pageTitle = {
  fontSize: "30px",
  fontWeight: "bold",
  margin: "0px 20px",
  justifyContent: "left",
};
const returnButton = {
  backgroundColor: "#DDBEA9",
  display: "inline",
  color: "#472D30",
  fontSize: "15px",
};
const sectionTitle = {
  fontWeight: "bold",
  fontSize: "25px",
};

export default function ConfirmOrder(props) {
  // const [inputs, setUserInfo] = useState({
  //   name: props.name,
  //   number: props.number,
  //   address: props.address,
  //   code: props.code,
  //   total: props.total,
  //   method: "0", // default
  // });
  const [userInfo, setUserInfo] = useState(props.userInfo)
  // setUserInfo({...userInfo, method: '0'})
  const [cartItems] = useState(props.cartItems)

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice < 300000 ? itemsPrice * 0.2 : 0;
  const totalPrice = itemsPrice + shippingPrice;  

  const handleFormChange = (event) => {
    const attr = event.target.name;
    const value = event.target.value;
    setUserInfo((values) => ({ ...values, [attr]: value }));
  };
  const handleChoiceChange = (event) => {
    setUserInfo((values) => ({ ...values, method: event.target.value }));
  };
  // hàm này sẽ gửi toàn bộ thông tin đơn hàng về chỗ quản lý đơn hàng
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Your name is: " +
        userInfo.name +
        "\nYour number is: " +
        userInfo.phone +
        "\nYour address is: " +
        userInfo.address
    );
  };
  return (
    <>
      <div>
        <Link to="/cart">
        <button className="mainButton_cart" style={returnButton}>
          <img src={returnIcon} alt="" />
          Quay lại
        </button>
        </Link>
        <span style={pageTitle}>Xác nhận đơn hàng</span>
      </div>

      <div className="mainBox_cart mainBox_confirm">
        <div className="mainBox_confirm formBox formContainer">
          <div className="row_confirm" style={sectionTitle}>
            1. Thông tin người nhận
          </div>
          <form>
            <EditableInput
              labelText="Tên"
              name="name"
              value={userInfo.name}
              onChange={handleFormChange}
            />
            <EditableInput
              labelText="SĐT"
              name="number"
              value={userInfo.phone}
              onChange={handleFormChange}
            />
            <EditableInput
              labelText="Địa chỉ"
              name="address"
              value={userInfo.address}
              onChange={handleFormChange}
            />
          </form>
        </div>
        <div className="mainBox_confirm formBox formContainer">
          <div style={sectionTitle}>2. Thông tin đơn hàng</div>
          <form>
            <UneditableInput
              labelText="Mã đơn hàng"
              name="code"
              value={'13579'}
            />
            <UneditableInput
              labelText="Tổng cộng"
              name="total"
              value={totalPrice + " VNĐ"}
            />
          </form>
        </div>
      </div>

      <div className="mainBox_cart mainBox_confirm">
        <div className="mainBox_confirm choiceBox">
          <div style={sectionTitle}>3. Phương thức thanh toán</div>
          <label className="choiceContainer label_confirm">
            <input
              className="radioButton_confirm"
              type="radio"
              value="0"
              checked={userInfo.method === "0"}
              onChange={handleChoiceChange}
            />
            <img
              src={cash}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Thanh toán tiền mặt khi nhận hàng
          </label>
          <br />
          <label className="choiceContainer label_confirm">
            <input
              className="radioButton_confirm"
              type="radio"
              value="1"
              checked={userInfo.method === "1"}
              onChange={handleChoiceChange}
            />
            <img
              src={bank}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Chuyển khoản qua ngân hàng
          </label>
          <br />
          <label className="choiceContainer label_confirm">
            <input
              className="radioButton_confirm"
              type="radio"
              value="2"
              checked={userInfo.method === "2"}
              onChange={handleChoiceChange}
            />
            <img
              src={momo}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Thanh toán qua ví Momo
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="mainButton_cart"
          style={{ backgroundColor: "#E0FD56" }}
          onClick={handleSubmit}
        >
          <img src={okIcon} alt="" />
          XÁC NHẬN ĐẶT HÀNG
        </button>
      </div>
    </>
  );
}

function EditableInput(props) {
  const { labelText, name, value, onChange } = props;
  const inputRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    inputRef.current.focus();
  };

  return (
    <div className="row_confirm">
      <div className="col-25_confirm">
        <label className="label_confirm">{labelText}</label>
      </div>
      <div className="col-75_confirm">
        <input
          className="input_confirm"
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          style={{background:'white'}}
        />
      </div>
      <div className="col-end_confirm">
        <button
          className="mainButton_cart"
          onClick={handleClick}
          style={{ backgroundColor: "inherit", boxShadow: "none" }}
        >
          <img src={pen} alt="" />
        </button>
      </div>
    </div>
  );
}

function UneditableInput(props) {
  const { labelText, name, value } = props;

  return (
    <div className="row_confirm">
      <div className="col-25_confirm">
        <label className="label_confirm">{labelText}</label>
      </div>
      <div className="col-75_confirm">
        <input className="input_confirm" type="text" name={name} value={value} style={{background:'#FEFAE0'}}readOnly />
      </div>
    </div>
  );
}
