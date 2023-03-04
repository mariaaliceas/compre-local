/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("pedido", (table) => {
        table.increments("idPedido").primary();
        table.string("codigo");
        table.boolean("isDelivery");
        table.dateTime("horarioEntrega");
        table.integer("previsaoMinEntrega");
        table.integer("previsaoMaxEntrega");
        table.string("tpParagamento");
        table.string("stPedido");
        table.integer("idUsuario").unsigned();
        table.foreign("idUsuario").references("usuario.idUsuario");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("pedido");
};
