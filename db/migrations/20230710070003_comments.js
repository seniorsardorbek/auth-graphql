/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.string('text').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('comments');
};
