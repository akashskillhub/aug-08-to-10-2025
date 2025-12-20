import { DEC, INC, RESET } from "../constants/counterConstants"

export const counterReducer = (state = { count: 100 }, { type, payload }) => {
    if (type === INC) {
        return { count: state.count + payload }
    } else if (type === DEC) {
        return { count: state.count - payload }
    } else if (type === RESET) {
        return { count: 0 }
    } else {
        return state
    }
}