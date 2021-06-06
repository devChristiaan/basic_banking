const express = require('express')
const router = express.Router()

const { ... accounts } = require("../data.js")

///Main Routes -- Summary view
router.get('/', (req,res) => res.render('index', {title: 'Account Summary', accounts: accounts}))

//Profile view
router.get('/profile', (req,res) => res.render('profile', {user: users[0]}))

//Savings AC route
router.get('/savings', (req,res) => res.render('index', {accounts: accounts.savings}))

//CHQ AC route
router.get('/checking', (req,res) => res.render('index', {accounts: accounts.checking}))

//CC AC route
router.get('/credit', (req,res) => res.render('index', {accounts: accounts.credit}))

//Transfer route GET
router.get('/transfer', (req, res) => res.render('transfer'))


//Transfer route POST
router.post('/transfer', (req, res) => {
  accounts[req.body.from].balance -= req.body.amount
  accounts[req.body.to].balance += parseInt(req.body.amount, 10)

  writeJSON();

  res.render('transfer', {message: "Transfer Completed"})
})

//Credit Route
router.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}))

//Transfer route POST
router.post('/payment', (req, res) => {
  accounts[req.body.from].balance -= req.body.amount
  accounts[req.body.to].balance += parseInt(req.body.amount, 10)

  writeJSON();

  res.render('transfer', {message: "Transfer Completed"})
})

//Payment tranfer route
router.post('/payment', (req, res) => {
  accounts.credit.balance -= req.body.amount;
  accounts.credit.available += parseInt(req.body.amount);
  writeJSON();
  res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});

module.exports = router