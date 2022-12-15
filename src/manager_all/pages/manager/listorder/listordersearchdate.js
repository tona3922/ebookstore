import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

const isDate = date => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

export default function ListOrderSearchDate (props) {
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
                {/* <input type="text" placeholder={"Từ ngày"} 

                />
                <input type="text" placeholder={"Đến ngày"} 
                
                /> */}
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

/*
	<input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả đơn hàng</label>
	<div className="searchdate--container">
                <div className="searchdate--input">
                    <input type="text" placeholder={"Từ ngày"} />
		</div>
		<div className="searchdate--input">
			<input type="text" placeholder={"Đến ngày"} />
		</div>
		<div className="searchdate--input">
                    <button type="button" className="button">Search</button>
                </div>
            </div >


<div className="multi-inputs">
                <div className="input" style={{ "width": "25%" }}>
                        <input type="text" className="input-field" />
                        <label className="input-label">Ngày bắt đầu</label>
                    </div>
		<div className="input" style={{ "width": "25%" }}>
                        <input type="date" className="input-field" value="1990-01-01" required />
                        <label className="input-label">Ngày kết thúc</label>
                    </div>
		</div>
*/
