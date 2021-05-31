//Import basic modules
const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

//Setup basic func of app
app.set('views', path.join(__dirname, './views'))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))


///Main Routes
app.get('/', (req,res) =>{
  res.render('index', {title: 'Index'})
})

//Server
app.listen(3000, () =>{
  console.log("Server is running on localhost:3000");
})