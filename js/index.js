import test, { largest, sum } from "./utils.js"
import * as UTILS from "./utils.js"

const total1 = sum(10, 20, 30)
const total2 = UTILS.sum(10, 20, 30)
console.log(total1, total2)

const l1 = largest(5, 20)
const l2 = UTILS.largest(5, 20)
console.log(l1, l2)

console.log(test)
console.log(UTILS.default)



