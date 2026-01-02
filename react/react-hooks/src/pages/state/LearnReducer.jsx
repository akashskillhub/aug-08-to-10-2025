import React, { useReducer, useState } from 'react'

const bankReducer = (state, { type, payload }) => {
    switch (type) {
        case "DEPOSIT": return { ...state, balance: state.balance + payload };
        case "WIDRAW": return { ...state, balance: state.balance - payload };
        default: return state
    }
}

const LearnReducer = () => {
    //                       👇 initial value
    // useReducer(() => { }, {})
    //            👆reducer fn

    const [{ balance }, dispatch] = useReducer(bankReducer, { balance: 1000 })


    const [theme, setTheme] = useState("dark")
    return <>
        <h1>{theme}</h1>
        <button onClick={e => setTheme(pre => pre === "dark" ? "light" : "dark")}>toggle</button>
        <hr />
        <h1>{balance}</h1>
        <button onClick={e => dispatch({ type: "DEPOSIT", payload: 100 })}>deposit</button>
        <button onClick={e => dispatch({ type: "WIDRAW", payload: 500 })}>Widraw</button>

    </>
}

export default LearnReducer