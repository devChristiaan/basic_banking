//Import basic modules
const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

//Setup of static files
app.set('views', path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, 'public')))

//Views Engine
app.set('view engine', 'ejs')

//Parse Json
app.use(express.json())

function getAccounts () {
  const accountData = fs.readFileSync(path.join(__dirname, './json/accounts.json'), 'utf8')
  const accounts =JSON.parse(accountData)
}


///Main Routes
app.get('/', (req,res) =>{
  res.render('index', {title: 'Index'})
})

//Server
app.listen(3000, () =>{
  console.log("Server is running on localhost:3000");
})