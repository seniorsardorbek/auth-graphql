/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema.alterTable('users', (table) => {
      table.string('last_name').notNullable()
      table.boolean('is_deleted' ).defaultTo(false).notNullable()
      table.timestamps(true , true)
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function (knex) {
    return knex.schema.alterTable('users', (table) => {
      table.dropColumns('last_name', 'is_deleted' , timestamps);
    });
  };
  