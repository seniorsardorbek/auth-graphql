import db from '../../db/index.js';

export const list = (filter = {}) => {
  return db('items').where(filter).select('*');
};