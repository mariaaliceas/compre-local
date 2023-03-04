/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("produto", (table) => {
        table.increments("idProduto").primary();
        table.string("codigo");
        table.string("nome");
        table.float("estoque");
        table.float("preco");
        table.string("unidadeMedida", 100);
        table.integer("idComercio").unsigned();
        table.foreign("idComercio").references("comercio.idComercio");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("produto");
};
