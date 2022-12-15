import React, { useState } from 'react'
import {
    Link,
} from "react-router-dom";

const isDate = date => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

export default function SearchDate (props) {
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
        <div className="searchdate--container">
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
            <Link to='/manager/orderdata'><button className='viewdata-btn'>Xem dữ liệu</button></Link>
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
