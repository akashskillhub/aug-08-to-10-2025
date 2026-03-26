type Todo = {
    task: string
    description: string
    // priority: string
    isComplete?: Boolean
    id?: Number
}
export type TODO_CREATE_REQUEST = Todo
export type TODO_CREATE_RESPONSE = { message: string }

export type TODO_READ_REQUEST = void
export type TODO_READ_RESPONSE = { message: string, result?: Todo[] }

export type TODO_UPDATE_REQUEST = Todo
export type TODO_UPDATE_RESPONSE = { message: string }

export type TODO_DELETE_REQUEST = void
export type TODO_DELETE_RESPONSE = { message: string }