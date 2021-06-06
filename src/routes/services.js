const express = require("express")

const router = express.Router()

const { writeJSON, accounts } = require("../data.js")

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