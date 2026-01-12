
type NOTE = {
    task: string,
    desc: string,
    priority: string,
    complete: boolean,
    id: number
}

const ALL_NOTES: NOTE[] = []

const readTodo = (): NOTE[] => {
    return ALL_NOTES
}
const createTodo = (arg: NOTE) => {
    ALL_NOTES.push(arg)
}

const removeTodo = (id: number) => {
    ALL_NOTES.splice(ALL_NOTES.findIndex(item => item.id === id), 1)
}


console.log(readTodo())

createTodo({
    complete: true,
    task: "learn ts",
    desc: "fake desc",
    priority: "high",
    id: 1
})
createTodo({
    complete: true,
    task: " Nextjs",
    desc: "fake desc",
    priority: "high",
    id: 2
})
createTodo({
    complete: true,
    task: "PostgreSQL",
    desc: "fake desc",
    priority: "high",
    id: 3
})

console.log("after create todo")
console.log(readTodo())

removeTodo(2)

console.log("after remove")
console.log(readTodo())


// interface
// genrics
// decorators
// enum
// union