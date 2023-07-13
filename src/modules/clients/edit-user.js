import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';

export const editClient = async ({ id, ...changes }) => {
  const user = await db('clients').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Client not found');
  }


  return (
    await db('clients')
      .where({ id })
      .update({ ...changes })
      .returning('*')
  )[0];
};
