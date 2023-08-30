const http =  require('node:http')
const fs = require('node:fs')

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type":"text/plain"}); //writes the format of request + type
//     res.end("Hello world") //what to write on port 3000
// })

// const server = http.createServer((req, res)=>{
//     const Superhero={name:'superman', real:'clark kent'}

//     res.writeHead(200, {"Content-Type":"application/json"}); //writes the format of request + type
//     res.end(JSON.stringify(Superhero)) //what to write on port 3000
// })

// const server = http.createServer((req, res)=>{
//         res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
//         res.end('<h1>Hello World</h1>') //what to write on port 3000
//     })

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
//     const html = fs.readFileSync('./index.html', 'utf-8', (err)=> console.log(err))
//     res.end(html) //what to write on port 3000
// })

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
    fs.createReadStream(__dirname +'/index.html').pipe(res)
})

// To listen to requests

server.listen(3000, ()=>{
    console.log("Server running on port 3000")
})