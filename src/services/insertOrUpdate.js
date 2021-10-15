const db = require('../db/dbConnection')


const validator = async ({ type_sensor, name_sensor, value_sensor }) => {
    console.log(type_sensor, name_sensor, value_sensor)
    await db('sensors').insert(type_sensor, name_sensor, value_sensor)
}

module.exports = { validator }
