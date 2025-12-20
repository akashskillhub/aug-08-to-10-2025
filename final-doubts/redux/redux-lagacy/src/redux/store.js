import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

// reducer
const bankReducer = (state = { balance: 1000 }, { type, payload }) => {
    switch (type) {
        case "DEPOSIT": return { balance: state.balance + payload }
        case "WIDRAW": return { balance: state.balance - payload }
        default: return state
    }
}

const rootReducer = combineReducers({ hdfc: bankReducer })
// store
export const reduxStore = createStore(rootReducer, {}, composeWithDevTools())

// actions

export const depositMoney = () => {
    reduxStore.dispatch({ type: "DEPOSIT", payload: 100 })
}
export const widrawMoney = () => {
    reduxStore.dispatch({ type: "WIDRAW", payload: 10 })
}