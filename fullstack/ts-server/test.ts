type TODO = {
    task: string
    desc: string
    priority: string
}
type TODO_UPDATE = {
    _id: string
    task: string
    desc: string
    priority: string
}

interface NOTE {
    task: string
    desc: string
    priority: string
}
interface NOTE_UPDATE extends NOTE {
    _id: string
}