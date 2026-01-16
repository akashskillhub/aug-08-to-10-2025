type TODO = {
    id: number,
    task?: string,
    desc: string
}

const x: TODO = {
    id: 1,
    desc: "dd"
}

// utility to make all keys optional
const y: Partial<TODO> = {}