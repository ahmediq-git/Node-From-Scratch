### Node server with http module

check out [httpserver.js](httpserver.js) to see how to implement a server with the http module.
```js
const http =  require('node:http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"}); //writes the format of request + type
    res.end("Hello world") //what to write on port 3000
})

// To listen to requests

server.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
```

Do note that we cant just display objects online so we need to convert them to JSON objects with JSON.stringify

So we do the following

Also remember to change the Content-Type to application/json
```js
const http =  require('node:http')

const server = http.createServer((req, res)=>{
    const Superhero={name:'superman', real:'clark kent'}

    res.writeHead(200, {"Content-Type":"application/json"}); //writes the format of request + type
    res.end(JSON.stringify(Superhero)) //what to write on port 3000
})

// To listen to requests

server.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
```

Do Note:

`JSON.stringify` converts JSON object to string

and

`JSON.parse` converts JSON object back to object

### Content-Types
1. `{"Content-Type":"application/json"}` for displaying JSON

2. `{"Content-Type":"text/plain"}` for displaying plain text

3. `{"Content-Type":"text/html"}` for displaying html

### More better way, importing the html file and rendering it

```js
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
    const html = fs.readFileSync('./index.html', (err)=> console.log(err))
    res.end(html) //what to write on port 3000
})
```


### Even more better and performant way: Using Pipes

```js
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"}); //writes the format of request + type
    fs.createReadStream(__dirname +'./index.html').pipe(res)
})
```

## Dynamic Values in server

check out [dynamichttpserver.js](dynamichttpserver.js) to see how to inject values in the dom with nodejs
Basically a webpage with variables

### Dynamic routes with nodejs rendered site

check out [dynamicroutes.js](dynamicroutes.js)


##### Alot of the things above is manual work and they can be used for GET, POST requests etc by setting the relevant routes