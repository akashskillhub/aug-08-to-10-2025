import React from 'react'

const LearnPropDrilling = ({ children }) => {
    const user = "John Doe"
    return <>
        <div>LearnPropDrilling</div>
        <hr />
        <Child data={user} message={children}> </Child>
    </>
}

const Child = ({ data, message }) => {
    return <>
        <div>child</div>
        <hr />
        <GrandChild test={data} x={message}></GrandChild>
    </>
}
const GrandChild = ({ test, x }) => {
    return <>
        <div>GrandChild</div>
        <div>{test}</div>
        <h1>{x}</h1>
    </>
}
// useEffect
// Routing
// formik

export default LearnPropDrilling