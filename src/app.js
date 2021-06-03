//Import basic modules
const fs = require('fs')
const path = require('path')
const express = require('express')
const { get } = require('http')

const app = express()

//Setup of static files
app.set('views', path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, 'public')))

//Views Engine
app.set('view engine', 'ejs')

//Parse Json
app.use(express.json())

//Encode URL data
app.use(express.urlencoded({extended: true}))

//Read account Data
function getAccounts () {
  const accountData = fs.readFileSync(path.join(__dirname, './json/accounts.json'), 'utf8')
  const accounts = JSON.parse(accountData)
  return accounts
}

//Read User Data
function getUser () {
  const userData = fs.readFileSync(path.join(__dirname, './json/users.json'), 'utf8')
  const users = JSON.parse(userData)
  return users
}

///Main Routes -- Summary view
app.get('/', (req,res) =>{
  const accounts = getAccounts()
  res.render('index', {title: 'Account Summary',
accounts: accounts})
})

//Profile view
app.get('/profile', (req,res) =>{
  const user = getUser()
  res.render('profile', {user: user[0]})
})

//Savings AC route
app.get('/savings', (req,res) =>{
  const accounts = getAccounts()
  res.render('index', {accounts: accounts.savings})
})

//CHQ AC route
app.get('/checking', (req,res) =>{
  const accounts = getAccounts()
  res.render('index', {accounts: accounts.checking})
})
//CC AC route
app.get('/credit', (req,res) =>{
  const accounts = getAccounts()
  res.render('index', {accounts: accounts.credit})
})

//Transfer route GET
app.get('/transfer', (req, res) => {
  res.render('transfer')
})

//Calculate new balance after transfer
function calculateBalancesFromTransfer(fromAmount, amount) {
  return newBalance = fromAmount - amount
}

//Transfer route POST
app.post('/transfer', (req, res) => {
  res.render('transfer')
})

//Server
app.listen(3000, () =>{
  console.log("Server is running on localhost:3000");
})