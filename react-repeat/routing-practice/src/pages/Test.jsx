import React, { useEffect, useState } from 'react'

const Test = () => {
    const [search, setSearch] = useState("")

    const handleChange = e => {
        setSearch(e.target.value)
    }
    // debouncing
    useEffect(() => {
        const x = setTimeout(() => { console.log("API CALL") }, 2000)
        return () => {
            clearTimeout(x)
        }
    }, [search])

    return <>
        <input type="text" onChange={handleChange} />
    </>
}

export default Test
