const demo = () => {
    return "hello world"
}


const test = arg => [arg, demo]

const [x, y] = test("dell")
const z = y()