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

module.exports = router