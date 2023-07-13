/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.alterTable('users', (table) => {
    table.string('username').notNullable().unique();
    table.string('password', 350).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumns('username', 'password');
  });
};
