
// Legacy
// Toolkit
// Toolkit + RTK
import { createStore } from "redux"

// reducer
const rootReducer = (state = { balance: 100 }, { type, payload }) => {
    if (type === 'DEPOSIT') {
        return { balance: state.balance + payload }
    }
    if (type === 'WIDRAW') {
        return { balance: state.balance - payload }
    }
    return state
}

// store
const store = createStore(rootReducer)

// actions
console.log("intitial", store.getState()) // 👈 returns value from store

store.dispatch({ type: "DEPOSIT", payload: 500 }) // 👈 action
console.log("after", store.getState())

store.dispatch({ type: "WIDRAW", payload: 600 }) // 👈 action
console.log("after", store.getState())