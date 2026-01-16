
const sum = (num1: number, num2: number): string => "" + num1 + num2

sum(10, 20)
const x: number = 10

console.log(typeof sum)
console.log(typeof x)

type tt = ReturnType<typeof sum>

const store = {
    getState: (): boolean => true,
    st: 10
}
type result = ReturnType<typeof store.getState>
type zz = (typeof store.st)