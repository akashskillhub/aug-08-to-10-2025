const allEmployees = [
    { id: 1, name: "ross" },
    { id: 2, name: "john" },
    { id: 3, name: "kate" },
]
const x = allEmployees.filter(item => item.id === 3).map(item => item.name)
console.log(x)

const y = allEmployees.findIndex(item => item.id === 3)
console.log(allEmployees[y].name)

