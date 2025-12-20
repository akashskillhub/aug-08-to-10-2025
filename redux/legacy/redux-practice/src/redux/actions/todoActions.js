import { CREATE, REMOVE } from "../constants/todoConstants"
import { reduxStore } from "../store"

export const createTodo = arg => {
    reduxStore.dispatch({ type: CREATE, payload: arg })
}

export const removeTodo = arg => {
    reduxStore.dispatch({ type: REMOVE, payload: arg })
}