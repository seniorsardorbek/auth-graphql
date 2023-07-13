import bcryptjs from 'bcryptjs';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    {
      // id: "1",
      name: 'Sardorbek',
      last_name :"dada" ,
      username: 'sardor',
      password: bcryptjs.hashSync('1234', 10),
    },
    // {
    //   // id: "2",
    //   name: 'Imron',
    //   username: 'imron',
    //   password: bcryptjs.hashSync('1234', 10),
    // },
  ]);
};
