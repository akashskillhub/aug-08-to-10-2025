const data = { result: [{}, {}], total: 15 }
const pagi = { limit: 2, page: 1 }

// const totalBtn = Math.ceil(data.total / pagi.limit) // 5
const x = Array
    .from({ length: Math.ceil(data.total / pagi.limit) })
    .map((item, i) => `<button>${i}</button>`)
console.log(x)
