const fs = require("fs")

const [, , opration, filename] = process.argv

if (opration === "--c") {
    fs.writeFileSync(filename, "hello node")
} else if (opration === "--d") {
    fs.unlinkSync(filename)
} else {
    console.log(`
            1 please type create to create new file
            eg. node index.js --c test.html
            
            2 please type delete to delete file
            eg. node index.js --d test.html
        `)

}