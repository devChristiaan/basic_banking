const express = require('express')
const router = express.Router()

const { accounts } = require("../data.js")

//Savings AC route
router.get('/savings', (req,res) => res.render('index', {accounts: accounts.savings}))

//CHQ AC route
router.get('/checking', (req,res) => res.render('index', {accounts: accounts.checking}))

//CC AC route
router.get('/credit', (req,res) => res.render('index', {accounts: accounts.credit}))

module.exports = router