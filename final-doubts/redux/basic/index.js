const { createStore } = require("redux")

// reducer
const rootreducer = (state = { balance: 1000 }, { type, payload }) => {
    switch (type) {
        case "DEPOSIT": return { balance: state.balance + payload };
        case "WIDRAW": return { balance: state.balance - payload };
        default: return state;
    }
}

// store
const reduxStore = createStore(rootreducer)

// action
console.log("befor", reduxStore.getState()) // useSelector

reduxStore.dispatch({ type: "DEPOSIT", payload: 100 })

console.log("after", reduxStore.getState()) // useSelector

reduxStore.dispatch({ type: "WIDRAW", payload: 500 })

console.log("after widraw", reduxStore.getState()) // useSelector
