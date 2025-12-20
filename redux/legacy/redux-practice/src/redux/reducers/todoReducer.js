import { CREATE, REMOVE } from "../constants/todoConstants"

//                                                      👇from todoAction
export const todoReducer = (state = { notes: [] }, { type, payload }) => {
    if (type === CREATE) {
        return { notes: [...state.notes, payload] }
    } else if (type === REMOVE) {
        return { notes: state.notes.filter(item => item !== payload) }
    } else {
        return state
    }
}