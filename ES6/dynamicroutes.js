const http =  require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res)=>{
    if (req.url==='/'){
        res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
        res.end("HomePage")
    } else if (req.url === '/login'){
        res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
        res.end("Login Page")
    } else if (req.url === '/api'){
        res.writeHead(200, {"Content-Type":"application/json"}); //writes the format of request + type
        res.end(JSON.stringify({name:'Bruce', lastname:'wayne'}))
    } else {
        res.writeHead(404)
        res.end("Not found")
    }
    
})

// To listen to requests

server.listen(3000, ()=>{
    console.log("Server running on port 3000")
})