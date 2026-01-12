var ALL_NOTES = [];
var readTodo = function () {
    return ALL_NOTES;
};
var createTodo = function (arg) {
    ALL_NOTES.push(arg);
};
var removeTodo = function (id) {
    ALL_NOTES.splice(ALL_NOTES.findIndex(function (item) { return item.id === id; }), 1);
};
console.log(readTodo());
createTodo({
    complete: true,
    task: "learn ts",
    desc: "fake desc",
    priority: "high",
    id: 1
});
createTodo({
    complete: true,
    task: " Nextjs",
    desc: "fake desc",
    priority: "high",
    id: 2
});
createTodo({
    complete: true,
    task: "PostgreSQL",
    desc: "fake desc",
    priority: "high",
    id: 3
});
console.log("after create todo");
console.log(readTodo());
removeTodo(2);
console.log("after remove");
console.log(readTodo());
// interface
// genrics
// decorators
// enum
// union
