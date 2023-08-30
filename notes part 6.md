### Express

Express is a Javascript library that is built on top of Node.

Check out the [folder](express) for a sample Express app.


```node.js
res.send
```

is for rendering content on a page.

#### Thunder Client is an alternate of postman and it is built in to VSCode which can be used instead.

### Why Express >>> vanilla http module

1. Express generates status codes by itself unlike http which we have to configure ourselves.
2. Express does not require `if-statements` for rendering each route



### Basic App
we import express and set it to app.
With app.get we can handle each route and either GET a page or data or do any other http requests.

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
```

### Middlewares

To use middlewares we use the following syntax. They access the request and response objects and change them
```js
app.use()
```

To make a custom middleware we can do the following:
The parameters for our own middlewares should be req, res, next.

```js
const our_middleware = (req, res, next)=>{
    // console.log(req, res, next)
    //do something
    next() //we use next so we can move to running the next middleware
}
app.use(our_middleware)
```

When we have multiple middleware function, in order for all of them to run, we need to specify `next()`