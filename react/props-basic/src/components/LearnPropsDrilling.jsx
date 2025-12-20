import React from 'react'

const LearnPropsDrilling = () => {
    const admin = "Ross Galler"
    const user = "Ethan Hunt"
    return <>
        <div>LearnPropsDrilling</div>
        <Parent data={admin} user={user}></Parent>
    </>
}

const Parent = ({ data, user }) => {
    return <>
        <h1>Parent</h1>
        <Child kahihi={data} user={user}></Child>
    </>
}
const Child = ({ kahihi, user }) => {
    return <>
        <h1>Child</h1>
        <GrandChild kuchbhi={kahihi} user={user}></GrandChild>
    </>
}
const GrandChild = ({ kuchbhi, user }) => {
    return <>
        <h1>GrandChild</h1>
        <h1>{kuchbhi}</h1>
        <h1>{user}</h1>
    </>
}

export default LearnPropsDrilling