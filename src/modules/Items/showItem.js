import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showItem = async ({ id }) => {
  const post = await db('items').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Item not found');
  };

  return post;
};