export const arr = ["dell", "hp"]
export const active = false
export const name = "ross"
export const age = 25
export const address = {
    home: "fake home address",
    office: "fake office address"
}
export const sayHello = name => console.log("hello ", name)

const demo = () => {
    console.log("demo called")
}
// default export once per file
export default demo
