import React, { createContext, useContext } from 'react'

const TestContext = createContext()

const LearnProps = () => {
    const auth = {
        admin: { name: "ross" }
    }
    const user = "john doe"

    return <TestContext.Provider value={user}>
        <div>Learn Props</div>
        <hr />
        <Child brand="dell" price="500" data={auth} />

    </TestContext.Provider>
}

const Child = ({ brand, price, data }) => {
    return <>
        <div>child</div>
        <h1>{brand} {price}</h1>
        <hr />
        <GrandChild x={data} />
    </>
}

const GrandChild = ({ x }) => {
    const result = useContext(TestContext)

    return <>
        <div>GrandChild</div>
        <h1>{x.admin.name}</h1>
        <h1>{result}</h1>
    </>
}

export default LearnProps