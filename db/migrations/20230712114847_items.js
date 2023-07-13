/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export  const up = function(knex) {
  return knex.schema.createTable("items" , (table)=>{
    table.increments('id');
    table.enum('type' , ["pitsalar", "salatlar", "desertlar", "zakuski", "ichimliklar"]);
    table.boolean('is_deleted').notNullable().defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const  down = function(knex) {
  return knex.schema.dropTable('items')
};
