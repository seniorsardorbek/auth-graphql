import db from '../../db/index.js';

export const removeItem = async ({ id }) => {
  const user = await db('items').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Item not found');
  }

  return (await db('items').where({ id }).delete().returning('*'))[0];
};