const express = require('express')
const app = express()
const path = require('node:path')
const PORT= 4000

app.use(express.static())


app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})