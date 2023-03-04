/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("itemCompra", (table) => {
        table.increments("idItemCompra").primary();
        table.integer("quantidade");
        table.float("valorTotal");
        table.string("observacoes");
        table.integer("idCarrinho").unsigned();
        table.foreign("idCarrinho").references("carrinho.idCarrinho");
        table.integer("idPedido").unsigned();
        table.foreign("idPedido").references("pedido.idPedido");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("itemCompra");
};
