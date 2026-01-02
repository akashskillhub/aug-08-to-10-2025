import { createContext, useContext } from "react"

const TestContext = createContext()

const LearnContext = () => {
    const brand = "dell"
    const user = { name: "ross", age: 20 }
    return <TestContext.Provider value={brand}>
        <div>LearnContext</div>
        <hr />
        <Child data={user}>
            <h1>helloooooooooooooo</h1>
        </Child>
    </TestContext.Provider>
}

const Child = ({ data, children }) => {
    return <>
        <div>Child</div>
        {children}
        <hr />
        <GrandChild data={data}></GrandChild>
    </>
}
const GrandChild = ({ data }) => {
    const x = useContext(TestContext)
    return <>
        <div>GrandChild</div>
        <hr />
        <h1>{data.name} {data.age}</h1>
        <h1>{x}</h1>
    </>
}
export default LearnContext