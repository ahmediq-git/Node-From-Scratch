const express = require('express')
const path = require('node:path')
const app = express()
const port = 3000

const our_middleware = (req, res, next)=>{
    // console.log(req, res, next)
    //do something
    console.log('hello world')
    next()
}

app.use(our_middleware)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// will get the params from the url and display them
app.get('/custom/:name',(req,res)=>{
    res.send("Hello " + req.params.name)
})

app.get('/page', (req,res)=>{
    res.sendfile(path.join(__dirname+'/page.html'))
})

app.get('/page2', (req,res)=>{
    res.send({name:"John"})
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})