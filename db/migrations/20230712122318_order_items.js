/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export  const up = function(knex) {
    return knex.schema.createTable("order_items" , (table)=>{
      table.increments('id');
      table.integer('item_id').references('id').inTable('items').notNullable()
      table.integer('size_id').references('id').inTable('item_sizes').notNullable()
      table.integer('quantity').notNullable()
      table.double('sub_total_price').notNullable()
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const  down = function(knex) {
    return knex.schema.dropTable('order_items')
  };
  