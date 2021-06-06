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

//Routes
const accountRoutes = require("./routes/accounts.js")
const servicesRoutes = require("./routes/services.js")

//Call routes
app.use("/account", accountRoutes)
app.use("/services", servicesRoutes)

//Server
app.listen(3000, () =>{
  console.log("Server is running on localhost:3000");
})