//Import basic modules
const fs = require('fs')
const path = require('path')
const express = require('express')

//Data
const { accounts, users, writeJSON } = require('./data.js');

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


///Main Routes -- Summary view
app.get('/', (req,res) => res.render('index', {title: 'Account Summary', accounts: accounts}))

//Profile view
app.get('/profile', (req,res) => res.render('profile', {user: users[0]}))

//Savings AC route
app.get('/savings', (req,res) => res.render('index', {accounts: accounts.savings}))

//CHQ AC route
app.get('/checking', (req,res) => res.render('index', {accounts: accounts.checking}))

//CC AC route
app.get('/credit', (req,res) => res.render('index', {accounts: accounts.credit}))

//Transfer route GET
app.get('/transfer', (req, res) => res.render('transfer'))


//Transfer route POST
app.post('/transfer', (req, res) => {
  accounts[req.body.from].balance -= req.body.amount
  accounts[req.body.to].balance += parseInt(req.body.amount, 10)

  writeJSON();

  res.render('transfer', {message: "Transfer Completed"})
})

//Credit Route
app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}))

//Transfer route POST
app.post('/payment', (req, res) => {
  accounts[req.body.from].balance -= req.body.amount
  accounts[req.body.to].balance += parseInt(req.body.amount, 10)

  writeJSON();

  res.render('transfer', {message: "Transfer Completed"})
})

//Payment tranfer route
app.post('/payment', (req, res) => {
  accounts.credit.balance -= req.body.amount;
  accounts.credit.available += parseInt(req.body.amount);
  writeJSON();
  res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});

//Server
app.listen(3000, () =>{
  console.log("Server is running on localhost:3000");
})