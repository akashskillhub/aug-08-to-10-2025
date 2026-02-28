const { differenceInSeconds } = require("date-fns")

const current = new Date()
const old = new Date("2026-02-18T03:18:20.454+00:00")

const result = differenceInSeconds(current, old)

console.log(result)
console.log(result / 60)
