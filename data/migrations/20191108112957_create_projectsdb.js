
exports.up = function(knex) {
    return knex.schema

    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.string('completed',255).defaultTo('false').notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name',255).unique().notNullable();
        tbl.string('description',255);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('task', 255).notNullable();
        tbl.string('notes', 255);
        tbl.string('completed',255).defaultTo('false').notNullable();
    })
    .createTable('res_proj', tbl => {
        tbl.increments();

        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('res_proj')
};
