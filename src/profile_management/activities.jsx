import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import logo from "../img/home/logo.png";
import back_icon from "../img/back.png";
import bills_icon from "../img/profile/bills_icon.png";
import bills_history_icon from "../img/profile/bills_history_icon.png";
import detail_icon from "../img/profile/detail_icon.png";
import cancel_icon from "../img/button/cancel_icon.png"
import { curActivity } from "./profile_data";
import { hisActivity } from "./profile_data";
import "./activities.css";


function Billinfo (props) {
    function DisplayStatus () {
        if(props.content === "Thanh toán khi nhận hàng" || props.content === "Đang chuẩn bị"){
            return <p style={{color: "#D60512"}}>{props.content}</p>
        } 
        else if(props.content === "Đang giao hàng"){
            return  <p style={{color: "#CFBB03"}}>{props.content}</p>
        }
        else if(props.content === "Đã thanh toán (online)" || props.content === "Đã hoàn thành"){
            return  <p style={{color: "#0BAE2F"}}>{props.content}</p>
        }
        else return  <p>{props.content}</p>
    }
    return (
        <div className="bill-info">
            <p className="label">{props.label}</p>
            <DisplayStatus />
        </div>
    )
}

function Billitems ({activity,typeof_act}) {
    const confirmCancel = () => {
        if(activity.status === "Đang giao hàng") {
            document.querySelector(".modal-cancelrefuse").classList.add("open");
        }
        else {
            document.querySelector(".modal-cancelbills").classList.add("open");
        }
    }

    function DecideLabel () {
        if(activity.status === "Đã hoàn thành")
            return <Billinfo label="Ngày nhận" content={activity.finish_date}/>
        else return <Billinfo label="Thanh toán" content={activity.payment}/>
    }

    function CancelBtn() {
        if(typeof_act === "cur") {
            return <button className="cancel-btn"  onClick={confirmCancel}>
            Hủy đơn
            <img src={cancel_icon} alt="" />
        </button>  
        }
    }

    return (
        <div className="bill-item">
            <div className="bill-info-contain">
                <div className="info">
                    <Billinfo label="Mã đơn hàng" content={activity.id}/> 
                    <Billinfo label="Tổng tiền" content={activity.total_price}/> 
                    <Billinfo label="Ngày đặt hàng" content={activity.order_date}/> 
                </div>
                <div className="status">
                    <Billinfo label="Tình trạng" content={activity.status}/>
                    <DecideLabel />
                </div>       
                <button className="detail-btn">
                    Xem chi tiết
                    <img src={detail_icon} alt="" />
                </button>
                <CancelBtn/>
            </div>
        </div>
    )
}


export const Activity = () => {
    const navigate = useNavigate();

    const openCurActivity = () => {
        if(document.querySelector(".activity-container.cur-activity.open") === null) {
            const curActivity = document.querySelector(".activity-container.cur-activity.close");
            const hisActivity = document.querySelector(".activity-container.his-activity.open");
            const curButton = document.querySelector(".activity-page-btn.bills-cur.close");
            const hisButton = document.querySelector(".activity-page-btn.bills-his.open");
            curActivity.classList.remove("close");
            hisActivity.classList.remove("open");
            curActivity.classList.add("open");
            hisActivity.classList.add("close");
            curButton.classList.remove("close");
            hisButton.classList.remove("open");
            curButton.classList.add("open");
            hisButton.classList.add("close");
        }
    }

    const openHisActivity = () => {
        if(document.querySelector(".activity-container.his-activity.open") === null) {
            const curActivity = document.querySelector(".activity-container.cur-activity.open");
            const hisActivity = document.querySelector(".activity-container.his-activity.close");
            const curButton = document.querySelector(".activity-page-btn.bills-cur.open");
            const hisButton = document.querySelector(".activity-page-btn.bills-his.close");
            curActivity.classList.remove("open");
            hisActivity.classList.remove("close");
            curActivity.classList.add("close");
            hisActivity.classList.add("open");
            curButton.classList.remove("open");
            hisButton.classList.remove("close");
            curButton.classList.add("close");
            hisButton.classList.add("open");
        }
    }
    return(
        <Fragment>
            <div className="activity-page">
                <div className="activity-header">
                    <button onClick={() => navigate(-1)} className="btn back-btn-activity">
                        <img src={back_icon} alt="" />
                        Quay lại
                    </button>
                    <img className="logo-activity" src={logo} alt="" />
                </div>
                <div className="activity-navbar">
                    <h1>My Activities</h1>
                    <button onClick={openCurActivity} className="activity-page-btn bills-cur open">
                        <img src={bills_icon} alt="" />
                        Đơn hàng hiện tại
                        <p>{curActivity.activities.length}</p>
                    </button>
                    <button onClick={openHisActivity} className="activity-page-btn bills-his close">
                        <img src={bills_history_icon} alt="" />
                        Lịch sử đơn hàng
                        <p>{hisActivity.activities.length}</p>
                    </button>
                </div>
                <div className="activity-container cur-activity open">
                    <h1 className="bills-header">Đơn hàng hiện tại</h1>
                    <div className="activity-content">
                        {curActivity.activities.map(activity => (
                            <Billitems activity={activity} typeof_act="cur"/>
                        ))}
                    </div>  
                </div>

                <div className="activity-container his-activity close">
                    <h1 className="bills-header">Lịch sử đơn hàng</h1>
                    <div className="activity-content">
                        {hisActivity.activities.map(activity => (
                            <Billitems activity={activity}/>
                        ))}
                    </div>  
                </div>
            </div>

            <div className="modal-cancelbills">
                <div className="modal-cancelbills-container">
                    <p>Bạn muốn hủy đơn hàng?</p>
                    <div className="button-container">
                        <button className="btn" 
                            onClick={()=>{document.querySelector(".modal-cancelbills.open").classList.remove("open");}}
                        >
                            Quay lại
                        </button>
                        <button className="btn" style={{marginLeft: "22%", backgroundColor:"rgb(255 155 118)"}}
                            onClick={()=>{alert("Hủy đơn hàng thành công!")}}
                        >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-cancelrefuse">
                <div className="modal-cancelrefuse-container">
                    <p>Bạn không thể hủy đơn hàng này do đơn hàng đang được giao đến!</p>
                    <div className="button-container">
                        <button className="btn" style={{backgroundColor:"rgb(255 155 118)", padding:"12px 40px"}}
                            onClick={()=>{document.querySelector(".modal-cancelrefuse.open").classList.remove("open");}}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}