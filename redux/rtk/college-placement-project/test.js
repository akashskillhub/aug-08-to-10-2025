const data = [
    { id: 5, title: "react", comapny: 5 },
    { id: 6, title: "node", comapny: 5 },
    { id: 7, title: "python", comapny: 6 },
]
const applicationData = [
    { sid: 1, jid: 5 },
    { sid: 1, jid: 6 },
]
const student = { id: 1, name: 'ethan' }


const isApplied = applicationData.find(item => item.sid === student.id && item.jid === item.id)

console.log(isApplied)
