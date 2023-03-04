/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("comercio", (table) => {
        table.increments("idComercio").primary();
        table.string("nomeComercio");
        table.string("cnpj",14);
        table.string("cpf",10);
        table.string("endereco",100);
        table.string("metodosPagamento");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comercio");
};
