const cart = [
    { id: 2, name: "Mobile 2", price: 4200 },
    { id: 4, name: "Mobile 4", price: 18000 },
    { id: 5, name: "Mobile 5", price: 24500 },
]
const x = cart.filter(item => item.id !== 4)
console.log(x)
