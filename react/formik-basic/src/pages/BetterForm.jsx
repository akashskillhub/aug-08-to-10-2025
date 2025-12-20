import React, { useState } from 'react'

const BetterForm = () => {
    const [formData, setFormData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        //                          👇 Dynamic Key
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = () => {
        console.log("form submit success")
    }

    return <form onSubmit={handleSubmit}>
        <input required type="text" name='fanme' onChange={handleChange} />
        <input type="text" name='lname' onChange={handleChange} />
        <button type='submit'>Add</button>
    </form>
}

export default BetterForm