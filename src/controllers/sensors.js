const express = require('express')
const { validator } = require('../services/insertOrUpdate')
const { singleSensor, allSensors } = require('../services/getSensors')

const router = express.Router()

router.post('/api/insert', async (req, res) => {
    const result = await validator(req)
    if(typeof result === 'string') {
        res.status(400).send({ "Erro": result })
    }
    res.status(201).send()
})

router.put('/api/update/:id', async (req, res) => {
    const result = await validator(req)
    if(typeof result === 'string') {
        res.status(400).send({ "Erro": result })
    }
    res.status(204).send()
})

router.get('/api/getSingle/:id', async (req, res) => {
    const result = await singleSensor(req)
    if(typeof result === 'string') {
        res.status(400).send({ "Erro": result })
    }
    res.status(200).send(JSON.stringify(result))
})

router.get('/api/getAll', async (req, res) => {
    const result = await allSensors()
    res.status(200).send(JSON.stringify(result))
})


module.exports = app => app.use(router);