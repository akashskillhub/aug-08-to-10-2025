import { combineReducers, createStore } from "redux"
import { counterReducer } from "./reducers/counterReducer"
import { todoReducer } from "./reducers/todoReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

// store
export const reduxStore = createStore(rootReducer, {}, composeWithDevTools())


