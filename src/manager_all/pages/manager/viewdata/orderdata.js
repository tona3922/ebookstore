import { Fragment } from "react"
import { data_order } from "../statistic/statistics_data"
import { data_revenue } from "../statistic/statistics_data"
import { Link } from "react-router-dom"

export const ViewOrderData = () => {
    function showOrderdata() {
        if(document.querySelector(".view-data-nav-btn.order.open") === null) {
            document.querySelector(".view-data-nav-btn.revenue.open").classList.remove("open");
            document.querySelector(".view-data-modal.revenue.open").classList.remove("open");
            document.querySelector(".view-data-nav-btn.order").classList.add("open");
            document.querySelector(".view-data-modal.order").classList.add("open");
        }
    }

    function showRevenuedata() {
        if(document.querySelector(".view-data-nav-btn.revenue.open") === null) {
            document.querySelector(".view-data-nav-btn.order.open").classList.remove("open");
            document.querySelector(".view-data-modal.order.open").classList.remove("open");
            document.querySelector(".view-data-nav-btn.revenue").classList.add("open");
            document.querySelector(".view-data-modal.revenue").classList.add("open");
        }
    }

    return(
        <Fragment>
            <div className="view-data-nav">
                <div className="view-data-navbtn-container">
                    <button className="btn view-data-nav-btn order open" onClick={showOrderdata}>Số lượng đơn hàng</button>
                    <button className="btn view-data-nav-btn revenue" onClick={showRevenuedata}>Doanh thu</button>
                </div>
            </div>
            <div className='view-data-modal order open'> 
                <div className='view-data-modal-container'>
                    <h1 style={{margin:"20px 3vw 10px 3vw"}}>Dữ liệu Thống kê</h1>
                    <h2 style={{margin:"15px 3vw"}}>Số lượng đơn hàng</h2>
                    <div className='view-list'>
                        <div className='col-name'>
                            <p style={{width:'20%'}}>STT</p>
                            <p style={{width:'40%'}}>Ngày - Tháng - Năm</p>
                            <p style={{width:'40%'}}>Số lượng đơn bán</p>
                        </div>
                        <div className='list-content'>
                            {
                                data_order.map((cur,index) => (
                                    <Fragment>
                                        <p style={{width:'20%'}}>{index}</p>
                                        <p style={{width:'40%'}}>{cur.date}</p>
                                        <p style={{width:'40%'}}>{cur.numorders}</p>
                                    </Fragment>
                                ))
                            }
                        </div>
                        <div className="conclusion">
                            <div>
                                <label style={{fontWeight: '600'}}>Tổng số đơn:</label>
                                <p>
                                    {
                                        data_order.reduce((accumulator, currentValue) => {
                                            return accumulator + currentValue.numorders;
                                        },0)
                                    }
                                </p>
                            </div>
                            <div>
                                <label style={{fontWeight: '600'}}>Số đơn trung bình:</label>
                                <p>
                                    {
                                        (data_order.reduce((accumulator, currentValue) => {
                                            return accumulator + currentValue.numorders;
                                        },0))/data_order.length
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/manager/statistic/order"><button className="btn back-btn-viewdata">Quay lại</button></Link>
                </div>
            </div>
            <div className='view-data-modal revenue'> 
                <div className='view-data-modal-container'>
                    <h1 style={{margin:"20px 3vw 10px 3vw"}}>Dữ liệu Thống kê</h1>
                    <h2 style={{margin:"15px 3vw"}}>Doanh thu</h2>
                    <div className='view-list'>
                        <div className='col-name'>
                            <p style={{width:'20%'}}>STT</p>
                            <p style={{width:'40%'}}>Ngày - Tháng - Năm</p>
                            <p style={{width:'40%'}}>Doanh thu</p>
                        </div>
                        <div className='list-content'>
                            {
                                data_revenue.map((cur,index) => (
                                    <Fragment>
                                        <p style={{width:'20%'}}>{index}</p>
                                        <p style={{width:'40%'}}>{cur.date}</p>
                                        <p style={{width:'40%'}}>{cur.revenue}</p>
                                    </Fragment>
                                ))
                            }
                        </div>
                        <div className="conclusion">
                            <div>
                                <label style={{fontWeight: '600'}}>Tổng doanh thu:</label>
                                <p>
                                    {
                                        data_revenue.reduce((accumulator, currentValue) => {
                                            return accumulator + currentValue.revenue;
                                        },0)
                                    }
                                </p>
                            </div>
                            <div>
                                <label style={{fontWeight: '600'}}>Doanh thu trung bình:</label>
                                <p>
                                    {
                                        (data_revenue.reduce((accumulator, currentValue) => {
                                            return accumulator + currentValue.revenue;
                                        },0))/data_revenue.length
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/manager/statistic/order"><button className="btn back-btn-viewdata">Quay lại</button></Link>
                </div>
            </div>
        </Fragment>
    )
}
