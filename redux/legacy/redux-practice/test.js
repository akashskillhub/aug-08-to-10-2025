const state = {
    notes: ["dell", "hp", "apple"]
}
const payload = "apple"

const x = state.notes.filter(item => item !== payload)
console.log(x)
