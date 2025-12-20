const x = "brand"
const obj = { name: "ross", }
obj[x] = "dell" // obj.brand = "dell"

const test = key => obj[key]  // obj.name

console.log(test("name"))
