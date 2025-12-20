import axios from 'axios'
import React, { useState } from 'react'

const BetterForm = () => {

    const [formData, setFormData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async () => {
        //          👇API Endpoint
        await fetch("http://localhost:5000/users", {
            method: "POST", //👈 Methods :  POST GET Patch/PUT  DELETE
            body: JSON.stringify(formData),
            headers: { // 👈 metadata for backend (kind of attribute for backend)
                "Content-Type": "application/json", // multipart/data
            }
        })
    }

    const handleSubmitWithAxios = async () => {
        await axios.post("http://localhost:5000/users", formData)
    }
    return <>
        <input name="fname" type="text" placeholder='name' onChange={handleChange} />
        <input name="mobile" type="number" placeholder='mobile' onChange={handleChange} />
        <button onClick={handleSubmit}>add</button>
        <button onClick={handleSubmitWithAxios}>add with axios</button>

    </>
}

export default BetterForm