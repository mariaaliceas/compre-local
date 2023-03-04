/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("carrinho", (table) => {
        table.increments("idCarrinho").primary();
        table.integer("idUsuario").unsigned();
        table.foreign("idUsuario").references("usuario.idUsuario");
        table.float("total");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("carrinho");
};
