import React from 'react'

const LearnPropDrilling = ({ brand }) => {
    const user = "john doe"
    return <>
        <div>LearnPropDrilling</div>
        <hr />
        <Child user={user} brand={brand} />
    </>
}
const Child = ({ user, brand }) => {
    return <>
        <div>child</div>
        <hr />
        <GrnadChild user={user} brand={brand} />
    </>
}
const GrnadChild = ({ user, brand }) => {
    return <>
        <div>GrandChild</div>
        <h1>{user}</h1>
        <h1>{brand}</h1>
    </>
}

export default LearnPropDrilling