import React, { memo } from 'react'

const Test = ({ brand }) => {
    console.log("test component")
    return <>
        <div>Test</div>
        <h1>{brand}</h1>
    </>

}

export default memo(Test)