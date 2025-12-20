const x = "city"
const obj = { name: "ross" }
const z = { ...obj, [x]: ["x"] }


// {name:"ross", city:["x"]}     5


// const p = { ...obj, name: "ethan" }

// obj.x = "london"
// 👇dynamic key
// obj[x] = "london"
// console.log(obj)
