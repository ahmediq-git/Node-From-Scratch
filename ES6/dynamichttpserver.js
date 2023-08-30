const http =  require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res)=>{
    const myvalue='Ahmed'
    res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
    let html = fs.readFileSync('./index.html', 'utf-8', (err)=> console.log(err))
    html=html.replace("{myvalue}", myvalue);
    res.end(html) //what to write on port 3000
})

// To listen to requests

server.listen(3000, ()=>{
    console.log("Server running on port 3000")
})