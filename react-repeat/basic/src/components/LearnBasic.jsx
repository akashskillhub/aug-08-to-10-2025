const LearnBasic = () => {
    const fname = "john"
    const age = 25
    const isActive = true
    const arr = ["dell", "hp", "apple"]
    const obj = { name: "john doe", age: 20 }
    const test = () => {
        console.log("test fn called")
    }

    const demo = name => console.log("hello", name)
    return <>
        <div>LearnBasic</div>
        <h1>{fname}</h1>
        <h1>{age}</h1>
        <h1>{isActive ? "TRUE" : "FALSE"}</h1>
        <h1>{arr}</h1>
        {
            arr.map(item => <h1 key={item}>{item}</h1>)
        }
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
        <button onClick={test}>click me</button>
        <button onClick={() => console.log("test called again")}>click me</button>

        <button onClick={() => demo("ethan")}>demo</button>
    </>
}

export default LearnBasic