import React from 'react'
import { useState } from 'react'

export default function SearchCode (props) {
    const [formValue, setFormValue] = useState("")
    const {setCodeSearched} = props

    // arrow function
    const handleSubmit = (event) => {
        event.preventDefault() // ko reload
        setCodeSearched(formValue)
    }

    return (
        <div className="statistic--container">
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