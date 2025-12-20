import React from 'react'

const Test = () => {

    const arr = [
        { name: "ross", active: true },
        { name: "john", active: true },
        { name: "kate", active: false },
        { name: "ethan", active: true },
    ]
    // retursn array
    const x = arr.filter(item => item.active)
    return (
        <div>Test</div>
    )
}

export default Test