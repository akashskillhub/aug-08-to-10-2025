import React, { useState } from 'react'

const LearnInput = () => {
    let [fname, setFname] = useState("Hello React")
    let str = "hello"
    const handleClick = () => {
        console.log("clicked")
    }
    //                 👇event from javascript
    const handleInput = e => {
        // console.log("changed")
        str = e.target.value
        setFname(e.target.value)
    }
    return <div>
        <h1>{str}</h1>
        <h1>{fname}</h1>
        <input type="text" onChange={handleInput} />
        <button onClick={handleClick}>click</button>
    </div>
}

export default LearnInput