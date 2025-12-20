import { createStore } from "redux"

// reducer
const bankReducer = (state = { balance: 0 }, { type, payload }) => {
    if (type === "DEPOSIT") {
        return { balance: state.balance + payload }
    }
    if (type === "WIDRAW") {
        return { balance: state.balance - payload }
    }
    return state
}
// store
export const reduxStore = createStore(bankReducer)
// actions
export const inc = amt => {
    reduxStore.dispatch({ type: "DEPOSIT", payload: amt })
}
export const dec = amt => {
    reduxStore.dispatch({ type: "WIDRAW", payload: amt })
}