import db from '../../db/index.js';

export const listclients = (filter = {}) => {
  return db('clients').where(filter).select('*');
};