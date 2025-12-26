const data = [
    { id: 1, title: "react", comapny: 5 },
    { id: 2, title: "node", comapny: 5 },
    { id: 3, title: "python", comapny: 6 },
]
const companyData = [
    { id: 5, name: "SKILLHUB" },
    { id: 6, name: "GOOGLE" },
]

const getCompany = id => {
    const z = companyData.find(item => item.id === id)
    return z.name
}

const x = data.map(item => `${item.title} ${item.comapny} ${getCompany(item.comapny)}`)
console.log(x)
