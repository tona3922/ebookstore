import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import RevenueContent from './revenuecontent'
// import RevenueLineChart from './revenuelinechart'

const isDate = date => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

export default function StatisticRevenueSearchDate (props) {
    const [localPair, setLocalPair] = useState({"from":"", "to":""})
    const {setFromTo} = props

    const handleSubmit = (event) => {
        event.preventDefault();
        if (localPair.from != '' && !isDate(localPair.from)) {
            alert('Ngày bên phía trái không hợp lệ')
        } else if (localPair.to != '' && !isDate(localPair.to)) {
            alert('Ngày bên phía phải không hợp lệ')
        } else {
            setFromTo(localPair)
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLocalPair(values => ({...values, [name]: value}))
    }

    return (
        <div className="statistic--container">
            <form>
                <InputDate 
                    placeholder="Từ ngày"
                    name="from"
                    value={localPair["from"]}
                    onChange={handleChange}
                />
                <InputDate 
                    placeholder="Đến ngày"
                    name="to"
                    value={localPair["to"]}
                    onChange={handleChange}
                />                
                <button className='button' onClick={handleSubmit}>Search</button>
            </form>
        </div >
    )
}

function InputDate(props) {
    const {placeholder, name, value, onChange} = props
    return (
        <input 
        type="text" 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onChange}
        />        
    )
}



// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>