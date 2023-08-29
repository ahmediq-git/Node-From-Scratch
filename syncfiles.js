const fs = require('node:fs')

// reads synchronous, (one after the other)
const readtext= fs.readFileSync('./readfile.txt', 'utf-8')
console.log(readtext)

//  reads asynchronously

const readtextasync = () => fs.readFile('./readfile.txt', 'utf-8', (error, data)=>{
    if (error){
        console.log(error)
    }
    else{
        console.log(data, 'async')
    }
})


readtextasync()


