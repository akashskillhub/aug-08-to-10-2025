import React from 'react'

const LeanrPropChildren = () => {
    return <>
        <div>LeanrPropChildren</div>
        <Child brand="apple">
            <h1>Hello</h1>
        </Child>
    </>

}

const Child = ({ brand, children }) => {
    return <>
        <div>child</div>
        <div>{brand}</div>
        {children}
    </>
}

export default LeanrPropChildren