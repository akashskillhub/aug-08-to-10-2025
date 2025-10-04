export const sum = (...num) => num.reduce((sum, item) => item + sum, 0)

export const largest = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

const test = () => { }
export default test