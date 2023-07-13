import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';

export const editItem = async ({ id, ...changes }) => {
  const user = await db('items').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Item not found');
  }


  return (
    await db('item')
      .where({ id })
      .update({ ...changes })
      .returning('*')
  )[0];
};
