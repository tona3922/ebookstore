import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import logo from "../img/home/logo.png";
import back_icon from "../img/back.png";
import bills_icon from "../img/profile/bills_icon.png";
import bills_history_icon from "../img/profile/bills_history_icon.png";
import detail_icon from "../img/profile/detail_icon.png";
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

function Billitems ({activity}) {

    function DecideLabel () {
        if(activity.status === "Đã hoàn thành")
            return <Billinfo label="Ngày nhận" content={activity.finish_date}/>
        else return <Billinfo label="Thanh toán" content={activity.payment}/>
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
            </div>
        </div>
    )
}


export const Activity = () => {
    const navigate = useNavigate();
    // document.querySelector(".activity-container.cur-activity").add("open");
    
    const openCurActivity = () => {
        if(document.querySelector(".activity-container.cur-activity.open") === null
            && document.querySelector(".activity-container.cur-activity.close") === null) {
            document.querySelector(".activity-container.cur-activity").classList.add("open");
            document.querySelector(".activity-container.his-activity").classList.add("close");
            document.querySelector(".activity-page-btn.bills-cur").classList.add("open");
            document.querySelector(".activity-page-btn.bills-his").classList.add("close");
        }
        else {
            const curActivity = document.querySelector(".activity-container.cur-activity.close");
            const hisActivity = document.querySelector(".activity-container.his-activity.open");
            const curButton = document.querySelector(".activity-page-btn.bills-cur.close");
            const hisButton = document.querySelector(".activity-page-btn.bills-his.open");
            if(hisActivity !== null) {
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
    }

    const openHisActivity = () => {
        if(document.querySelector(".activity-container.cur-activity.open") === null
            && document.querySelector(".activity-container.cur-activity.close") === null) {
            document.querySelector(".activity-container.cur-activity").classList.add("close");
            document.querySelector(".activity-container.his-activity").classList.add("open");
            document.querySelector(".activity-page-btn.bills-cur").classList.add("close");
            document.querySelector(".activity-page-btn.bills-his").classList.add("open");
        }
        else {
            const curActivity = document.querySelector(".activity-container.cur-activity.open");
            const hisActivity = document.querySelector(".activity-container.his-activity.close");
            const curButton = document.querySelector(".activity-page-btn.bills-cur.open");
            const hisButton = document.querySelector(".activity-page-btn.bills-his.close");
            if(hisActivity !== null) {
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
                    <button onClick={openCurActivity} className="activity-page-btn bills-cur">
                        <img src={bills_icon} alt="" />
                        Đơn hàng hiện tại
                        <p>{curActivity.activities.length}</p>
                    </button>
                    <button onClick={openHisActivity} className="activity-page-btn bills-his">
                        <img src={bills_history_icon} alt="" />
                        Lịch sử đơn hàng
                        <p>{hisActivity.activities.length}</p>
                    </button>
                </div>
                <div className="activity-container cur-activity">
                    <h1 className="bills-header">Đơn hàng hiện tại</h1>
                    <div className="activity-content">
                        {curActivity.activities.map(activity => (
                            <Billitems activity={activity}/>
                        ))}
                    </div>  
                </div>

                <div className="activity-container his-activity">
                    <h1 className="bills-header">Lịch sử đơn hàng</h1>
                    <div className="activity-content">
                        {hisActivity.activities.map(activity => (
                            <Billitems activity={activity}/>
                        ))}
                    </div>  
                </div>
            </div>
        </Fragment>
    )
}