import db from '../../db/index.js';

export const removeUser = async ({ id }) => {
  const user = await db('clients').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Client not found');
  }

  return (await db('clients').where({ id }).delete().returning('*'))[0];
};