import { validate } from "./utils.js"
console.log("app running ...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const desc = document.getElementById("desc")
const date = document.getElementById("date")
const createBtn = document.getElementById("create-btn")

createBtn.addEventListener("click", () => {
    if (validate(task, priority, desc, date)) {
        console.log("all good")
    } else {
        console.error("all fileds required")
    }
})

setTimeout(() => {
    console.log("settimeout called")
}, 5000)