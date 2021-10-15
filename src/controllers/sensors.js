const express = require('express')
const { validator } = require('../services/insertOrUpdate')

const router = express.Router()

router.post('/api/insert', (req, res) => {
    validator(req.body)
})

router.get('/api/update', (req, res) => {
    res.send("<h1>teste</h1>")
})


module.exports = app => app.use(router);