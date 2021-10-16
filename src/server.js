const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors())

require('./controllers/sensors')(app)

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log("Server listening on PORT", PORT)
});