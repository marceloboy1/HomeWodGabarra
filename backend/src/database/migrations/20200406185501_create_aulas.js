exports.up = function(knex) {
    return knex.schema.createTable('aulas', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('categoria').notNullable();
        // table.string('intensidade').notNullable();
        table.string('url').notNullable();
        table.string('professor_id').notNullable();
        table.foreign('professor_id').references('id').inTable('professores');
    });
};

//CASO NAO DE PARA CRIAR
exports.down = function(knex) {
    return knex.schema.dropTable('aulas');
};