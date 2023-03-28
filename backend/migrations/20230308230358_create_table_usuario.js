/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("usuario", (table) => {
        table.increments("idUsuario").primary();
        table.string("nome", 100).notNullable();
        table.string("telefone", 12).notNullable();
        table.string("endereco", 100).notNullable();
        table.string("numero", 10).notNullable();
        table.string("bairro", 100).notNullable();

        table.string("email", 100).notNullable();
        table.string("senha", 25).notNullable();


    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("usuario");
};

