import React from 'react'

const LearnBasic = () => {
    const name = "John Doe"
    const brands = ["dell", "hp"]
    const user = { name: "john", age: 20 }
    const sayHello = () => console.log("Hello React")

    return <div>
        <h1>{name}</h1>
        <h1>{brands}</h1>
        <h1>{user.name} {user.age}</h1>
        <button onClick={sayHello}>click</button>
    </div>
}

export default LearnBasic