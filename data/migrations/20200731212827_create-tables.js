
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments('id')
    tbl.string('name', 128).notNullable()
    tbl.string('description', 255)
    tbl.boolean('completed').notNullable().defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments('id')
    tbl.string('name', 128).notNullable()
    tbl.string('description', 255)
  })
  .createTable('tasks', tbl => {
    tbl.increments('id')
    tbl.string('description', 255).notNullable()
    tbl.string('notes', 255)
    tbl.boolean('completed').notNullable().defaultTo(false)
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('projects_resources', tbl => {
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resources.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
