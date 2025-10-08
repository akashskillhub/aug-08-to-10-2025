import { validate, showToast } from "./utils.js"
console.log("app running ...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const desc = document.getElementById("desc")
const date = document.getElementById("date")
const createBtn = document.getElementById("create-btn")
const root = document.getElementById("root")
const URL = "http://localhost:5000/notes"
const updateBtn = document.getElementById("update-btn")
const result = document.getElementById("result")
let selectedId
createBtn.addEventListener("click", () => {
    if (validate(task, priority, desc, date)) {
        createNote({
            task: task.value,
            desc: desc.value,
            priority: priority.value,
            date: date.value
        })
        getAllNotes()
        reset()
        showToast(result, "Todo Create Success")
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



window.removeNote = async id => {
    try {
        await fetch(`${URL}/` + id, { method: "DELETE" })
        console.log("todo delete success")
        getAllNotes()
        showToast(result, "Todo Delete Success", "danger")
    } catch (error) {
        console.error(error)
    }
}

window.handleEdit = (etask, edesc, epriority, edate, eid) => {
    selectedId = eid
    task.value = etask
    desc.value = edesc
    priority.value = epriority
    date.value = edate
    createBtn.classList.add("d-none")
    updateBtn.classList.remove("d-none")
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
                <button onclick="handleEdit('${item.task}', '${item.desc}', '${item.priority}', '${item.date}', '${item.id}')" class="btn btn-warning">Edit</button>
                <button onclick="removeNote(${item.id})" class="btn btn-danger">Delete</button>
            </td>
            </tr>`).join("")
        root.innerHTML = result
    } catch (error) {
        console.error(error)
    }
}

getAllNotes()


const reset = () => {
    task.value = ""
    desc.value = ""
    priority.value = ""
    date.value = ""

    task.classList.remove("is-valid")
    desc.classList.remove("is-valid")
    priority.classList.remove("is-valid")
    date.classList.remove("is-valid")
}

updateBtn.addEventListener("click", async () => {
    try {
        const body = {
            task: task.value,
            desc: desc.value,
            priority: priority.value,
            date: date.value
        }
        await fetch(`${URL}/${selectedId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        console.log("task update success")
        getAllNotes()
        reset()
        createBtn.classList.remove("d-none")
        updateBtn.classList.add("d-none")
        showToast(result, "Todo Update Success", "warning")
    } catch (error) {
        console.error(error)
    }
})

/*
    CRUD        Method          Body        Id

    Read        GET             NO          NO
    Create      POST            YES         NO
    Update      PATCH / PUT     YES         Yes
    Delete      DELETE          NO          Yes

*/