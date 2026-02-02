export type Blog = {
    id?: number,
    title: string,
    desc: string,
    hero: string,
    publish: boolean
}

export type User = {
    id?: number,
    name: string,
    email: string,
    password: string,
    cpassword?: string,
    active: boolean,
}