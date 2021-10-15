
exports.up = function (knex) {
    return knex.schema.createTable('sensors', table => {
        table.increments('id').primary()
        table.string('type_sensor').notNull()
        table.string('name_sensor').notNull()
        table.timestamp('created_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6))
        table.timestamp('modified_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6))
        table.float('value_sensor').notNull()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('sensors')
}
