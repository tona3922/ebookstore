import React, { Component, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

import RevenueContent1 from './revenuecontent1'
import RevenueLineChart1 from './revenuelinechart1'
// import RevenueContent2 from './ordercontent2'
// import RevenueLineChart2 from './orderlinechart2'

export default function StatisticRevenueContent (props) {
    const {datePair} = props

    return (
        <>
            { datePair.from === "2022-10-04" && datePair.to === "2022-10-06" &&
                <div>
                    <RevenueLineChart1 />
					<RevenueContent1 />
                </div>
            }
			{ datePair.from === "2022-10-01" && datePair.to === "2022-10-31" &&
                <div>
                    <RevenueLineChart1 />
					<RevenueContent1 />
                </div>
            }
            <div>
            { datePair.from == "" && datePair.to == "" &&
                <p style={{textAlign:'center'}}>
                    Vui lòng nhập khoảng thời gian cần thống kê!
                </p>
            }
            </div>
        </>
    )
};

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>