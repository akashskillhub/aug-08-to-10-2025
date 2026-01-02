import { useState } from "react"

const LearnState = () => {
    const [user, setUser] = useState({ name: "john", age: 20 })
    const [skills, setSkills] = useState(["react", "redux"])

    const [count, setCount] = useState(10)
    let x = 10
    const handleInc = () => {
        x++
        console.log(x)
    }
    const handleStateInc = () => {
        // react batch update 
        // setCount(count + 1) // count = 11
        // setCount(count + 1) // count = 11
        // console.log(count)

        // state update are async in nature
        setCount(pre => pre + 1)
        setCount(pre => pre + 1)
        console.log(count)

    }
    return <>
        <h1>{x}</h1>
        <button onClick={handleInc}>inc</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={handleStateInc}>+1</button>

        <hr />
        <pre>  {JSON.stringify(user)}</pre>
        <button onClick={e => setUser({ ...user, name: "ethan" })}>update user</button>
        <button onClick={e => setUser(pre => { return { ...pre, name: "ross" } })}>update user with callback</button>

        <hr />
        <pre>{JSON.stringify(skills)}</pre>
        <button onClick={e => setSkills([...skills, "js"])}>push skill</button>
        <button onClick={e => setSkills(pre => [...pre, "nodejs"])}>push skill with callback</button>
    </>
}

export default LearnState