const arr = [10, 20, 30, 40]
// const x = arr
const x = [...arr]
x.splice(0, 1)
console.log(x)
console.log(arr)


// const x = [...arr] // [10, 20, 30, 40]
// const [y, ...z] = [...arr]
// console.log(y)
// console.log(z)

const obj = { name: "ross", age: 20, city: "london" }
const o = { ...obj }
o.name = "ethan"
console.log(o);
console.log(obj);

// // console.log(p)

