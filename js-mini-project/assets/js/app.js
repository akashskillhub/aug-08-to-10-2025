import { validate } from "./utils.js"
console.log("app running ...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const desc = document.getElementById("desc")
const date = document.getElementById("date")
const createBtn = document.getElementById("create-btn")
const root = document.getElementById("root")
const URL = "http://localhost:5000/notes"

createBtn.addEventListener("click", () => {
    if (validate(task, priority, desc, date)) {
        createNote({
            task: task.value,
            desc: desc.value,
            priority: priority.value,
            date: date.value
        })
        getAllNotes()
    } else {
        console.error("all fileds required")
    }
})

const createNote = async todo => {
    try {
        await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        })
        console.log("note create success")

    } catch (error) {
        console.error(error)
    }
}

const getAllNotes = async () => {
    try {
        const res = await fetch(URL, { method: "GET" })
        const data = await res.json()
        const result = data.map(item => `<tr>
            <td>${item.id}</td>
            <td>${item.task}</td>
            <td>${item.desc}</td>
            <td>${item.priority}</td>
            <td>${item.date}</td>
            <td> 
                <button onclick="handleEdit('${item.task}', '${item.desc}', '${item.priority}', '${item.date}')" class="btn btn-warning">Edit</button>
                <button onclick="removeNote(${item.id})" class="btn btn-danger">Delete</button>
            </td>
            </tr>`).join("")
        root.innerHTML = result
    } catch (error) {
        console.error(error)
    }
}

getAllNotes()

window.removeNote = async id => {
    try {
        await fetch(`${URL}/` + id, { method: "DELETE" })
        console.log("todo delete success")
    } catch (error) {
        console.error(error)
    }
}

window.handleEdit = (etask, edesc, epriority, edate) => {
    task.value = etask
    desc.value = edesc
    priority.value = epriority
    date.value = edate
    createBtn.classList.add("d-none")
}




// npm i -g json-server@0.17
// json-server --w --p 5000 db.json