import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';

export const addClient = async (payload) => {
  const result = await db('clients')
    .insert({ ...payload })
    .returning('*');

  return result[0];
};
