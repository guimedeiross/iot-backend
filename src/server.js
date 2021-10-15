const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.json())
  
require('./controllers/sensors')(app)

module.exports = require('dotenv').config()

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log("Server listening on PORT", PORT)
});