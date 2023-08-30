// Built in path can use node:
const path = require('node:path')

console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename))

console.log(path.extname(__filename))

// Shows all the details of the file
console.log(path.parse(__filename))