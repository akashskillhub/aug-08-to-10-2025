import React, { useState } from 'react'

const Products = () => {
    const [values, setValues] = useState({})
    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input required name='fname' type="text" onChange={handleChange} />
            <input name='lname' type="text" onChange={handleChange} />
            <button type='submit'>add</button>
        </form>
    </>
}

export default Products