const config = require('../server')
console.log(config)

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: console.log(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  }
}