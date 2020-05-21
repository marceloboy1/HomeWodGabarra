exports.up = function(knex) {
    return knex.schema.createTable('professores', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        
    });
};

//CASO NAO DE PARA CRIAR
exports.down = function(knex) {
    return knex.schema.dropTable('professores');
};