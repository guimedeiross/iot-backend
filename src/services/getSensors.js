const db = require('../db/dbConnection')


const singleSensor = async ({ params }) => {
    const { id } = params
    try {
        if (!id || id === '') {
            throw new Error("Id não informado!")
        }
        const sensor = await db('sensors').where('id', id)
        return sensor
    } catch (error) {
        return error.message
    }

}

const allSensors = async () => {
    const sensor = await db('sensors').select('*')
    return sensor
}

module.exports = { singleSensor, allSensors }