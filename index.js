const express  = require('express')
const app  = express()
const phones = require('./phones.json') 
const port = 5000

app.get('/',(req,res)=>{
    res.send('Hello world, i am from another pc. what is your name?')
})
app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })