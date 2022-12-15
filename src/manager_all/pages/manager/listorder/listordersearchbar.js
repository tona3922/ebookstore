import React from 'react'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function ListOrderSearchBar (props) {
    const [formValue, setFormValue] = useState("")
    const {setCodeSearched} = props

    const handleSubmit = (event) => {
        event.preventDefault();
        setCodeSearched(formValue)
    }

    return (
        <div className="search--container">
            <form>
                <input 
                type="text" 
                placeholder={"Nhập mã đơn hàng"} 
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                />
                <button className='button' onClick={handleSubmit}>Search</button>
            </form>
        </div >
    )
}

// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>