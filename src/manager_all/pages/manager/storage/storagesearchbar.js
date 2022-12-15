import React, { Component } from 'react'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function StorageSearchBar (props) {
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
                    placeholder={"Nhập mã ISBN"} 
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button className='button' onClick={handleSubmit}>Search</button>
            </form>
        </div >
    )
}

/*
export default class StorageSearchBar extends Component {
    render() {
        return (
            <div className="search--container">
                <form >
                    <input type="text" placeholder={"Nhập mã ISBN"} />
                    <button type="button" className="button">Search</button>
                </form>
            </div >
        )
    }
}
*/
// <input type="text" placeholder={this.props.searchbarPH} name="search" />
// <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>