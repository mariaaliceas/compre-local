/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("comercio", (table) => {
        table.increments("idComercio").primary();
        table.string("emailPessoal",100).notNullable;
        table.string("emailEmpresa",100).notNullable;
        table.string("nome",100).notNullable;
        table.string("telefone",12);
        table.string("cnpj",14).notNullable;
        table.string("cpf",20).notNullable;
        table.string("rg",20).notNullable;
        table.string("endereco",100);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comercio");
};

