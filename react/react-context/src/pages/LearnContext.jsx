import React, { createContext, useContext } from 'react'
import { TestContext } from '../App'

const UserContext = createContext()

const LearnContext = () => {
    const user = "Ross Doe"
    return <UserContext.Provider value={user}>
        <div>LearnContext</div>
        <hr />
        <Child />
    </UserContext.Provider>
}

const Child = () => {
    return <>
        <div>Child</div>
        <hr />
        <GrandChild />
    </>
}
const GrandChild = () => {
    const x = useContext(UserContext)
    const y = useContext(TestContext) // will return value prop of TestContext.Provider 
    return <>
        <div>GrandChild</div>
        <h1>{x}</h1>
        <h1>{y}</h1>
        <hr />
    </>
}

export default LearnContext