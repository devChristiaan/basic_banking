//Import Modules
const fs = require('fs')
const path = require('path')

//Get accounts data
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8')
const accounts = JSON.parse(accountData)


//Get user data
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8')
const users = JSON.parse(userData)

//Write account Data
const writeJSON = () => {
  let accountsJSON = JSON.stringify(account, null, 4)
  fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), 'accountsJSON' ,'utf8')
}

module.exports = {
  accounts,
  users,
  writeJSON
}