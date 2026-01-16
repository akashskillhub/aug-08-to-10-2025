// task 1

const users = [
    { id: 1, name: "john", age: 20, city: "london" },
    { id: 2, name: "ross", age: 23, city: "new york" },
    { id: 3, name: "kate", age: 22, city: "boston" },
]

const getUserNameById = (id: number): string | undefined => {
    const userIndex: number = users.findIndex(item => item.id)
    return users[userIndex].name
}
getUserNameById(4)