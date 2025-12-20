import React from 'react'

const Child = ({ brand, count }) => {
    return <>
        <div>Child</div>
        <h1>{brand}</h1>
        <h1>{count}</h1>
    </>

}

export default Child