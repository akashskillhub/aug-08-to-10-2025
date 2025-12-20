import React from 'react'

const LearnBasic = () => {
    const brand = "dell"
    const age = 20
    const arr = ["html", "css", "js"]
    const obj = { name: "ross", city: "london" }
    const handleClick = () => console.log("hello")
    let count = 10
    const inc = () => {
        count++
        console.log(count)
    }
    // hook is a functions
    // useState
    // useEffect
    return <>
        <div>LearnBasic</div>
        <h1>{brand}</h1>
        <h1>{age}</h1>
        <h1>{arr}</h1>
        <h1>{obj.name} {obj.city}</h1>
        <button onClick={handleClick}>click me</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={inc}>+1</button>
        <hr />

        {
            arr.map(item => <h1>{item}</h1>)
        }
    </>

}

export default LearnBasic