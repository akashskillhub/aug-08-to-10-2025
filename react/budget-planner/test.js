const bank = [
    { amount: 100, type: "income" },
    { amount: 100, type: "income" },
    { amount: 20, type: "expense" },
    { amount: 30, type: "expense" },
]
const inc = bank
    .filter(item => item.type === "income")
    .reduce((sum, item) => item.amount + sum, 0)
const exp = bank
    .filter(item => item.type === "expense")
    .reduce((sum, item) => item.amount + sum, 0)
const bal = inc - exp

console.log(inc)
console.log(exp)
console.log(bal)
