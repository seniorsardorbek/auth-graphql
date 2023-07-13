/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export  const up = function(knex) {
    return knex.schema.createTable("item_sizes" , (table)=>{
      table.increments('id');
      table.integer('item_id').notNullable().references('id').inTable('items')
      table.double('price').notNullable()
      table.string('string').notNullable()
      table.timestamps(true, true )
      table.boolean('is_deleted').notNullable().defaultTo(false)
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const  down = function(knex) {
    return knex.schema.dropTable('item_sizes')
  };
  