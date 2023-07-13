import { makeExecutableSchema } from '@graphql-tools/schema';
import usersModule from '../modules/users/_index.js';
import itemModule from '../modules/Items/_index.js';
import clientModule from '../modules/clients/_index.js';

const typdefsArr = [usersModule.typeDefs ,clientModule.typeDefs ,   itemModule.typeDefs ];
const resolversArr = [usersModule.resolvers , clientModule.resolvers ,    itemModule.resolvers];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
