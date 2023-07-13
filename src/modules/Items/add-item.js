import db from '../../db/index.js';

export const addItem = async (payload) => {
  const result = await db('items')
    .insert({ ...payload })
    .returning('*');
console.log(result);
  return result[0];
};
export const addItemSize = async (payload) => {
  const result = await db('item_sizes')
    .insert({ ...payload })
    .returning('*');
console.log(result);
  return result[0];
};
