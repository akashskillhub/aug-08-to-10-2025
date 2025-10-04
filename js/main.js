// named import
// default import
// import demo, { arr, active, address, age, name, sayHello } from "./hero.js"
// import { users } from "./test.js"
// console.log("App Running...")
// console.log(arr)
// console.log(active)
// console.log(address)
// console.log(age)
// console.log(name)
// sayHello("Ross")

// console.clear()
// console.log(users)
// demo()

import * as skillhub from "./hero.js"
import * as dummy from "./test.js"
console.log(skillhub.name)
console.log(skillhub.arr)
console.log(skillhub.active)
console.log(skillhub.address)
console.log(skillhub.age)
skillhub.sayHello("Bill")
skillhub.default() //👈 Default Import
console.log(dummy.users)

// form validation
// form fetch with promises
// local storage
// session storage
// cookie storage




