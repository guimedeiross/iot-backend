const db = require('../db/dbConnection')


const validator = async ({ body, params, method }) => {
    const sensorCopy = { ...body }
    const { type_sensor, name_sensor, value_sensor } = sensorCopy
    if (params.id) sensorCopy.id = params.id
    let floatValue = 0
    try {
        if (method === 'PUT' || method === 'put') {
            if (!sensorCopy.id) {
                throw new Error("ID do sensor deve ser informado")
            }
        }
        if (type_sensor === '' || !type_sensor) {
            throw new Error("Tipo do sensor deve ser informado")
        }
        if (name_sensor === '' || !name_sensor) {
            throw new Error("Nome do sensor deve ser informado")
        }
        if (value_sensor === '') {
            throw new Error("Valor do sensor deve ser informado")
        }
        typeof value_sensor === 'string' ? floatValue = Number(value_sensor) : floatValue = value_sensor
        if (sensorCopy.id) {
            await db('sensors')
                .where('id', '=', sensorCopy.id)
                .update({ type_sensor, name_sensor, value_sensor: floatValue })
        } else {
            await db('sensors').insert({ type_sensor, name_sensor, value_sensor: floatValue })
        }
    } catch (error) {
        return error.message
    }
}

module.exports = { validator }
