import db from '../../db/index.js';

export const showClient = async ({ id }) => {
  const user = await db('clients').where({ id }).first();

  if (!user) {
    throw new Error('Not Found');
  }

  return user;
};