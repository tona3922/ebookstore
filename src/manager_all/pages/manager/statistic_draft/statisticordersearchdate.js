import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


const isDate = date => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

export default function StatisticOrderSearchDate (props) {
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

/*
export default class StatisticOrder extends Component {
    render() {
        return (
	<div className="s--c">
		<div className="statistic--order">
			<h3>Thống kê theo số lượng đơn hàng</h3>
            	</div>

		<div className="statistic--container">
		<form >
                    <input type="text" placeholder={"Từ ngày"} />
			<input type="text" placeholder={"Đến ngày"} />
                    <button type="button" className="button">Search</button>
                </form>
            </div >
		<OrderLineChart />
		<OrderContent />
	</div>
	)
    }
}
*/
// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
// <input type="checkbox" className="check--box" id="All" name="All" value="All" /> <label for="All">Tất cả</label>