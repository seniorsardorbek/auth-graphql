import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { addClient } from './add-user.js';
import { listclients } from './list-clients.js';
import { showClient } from './show-user.js';
import { editClient} from './edit-user.js';
import { removeUser } from './remove-user.js';
import { loginUser } from './login-user.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'clients', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    clients: (_, __, contextValue) => {
      isLoggedIn(contextValue);
      return listclients();
    },
    client: (_, args) => {
      return showClient({ id: args.id });
    },
  },
  Mutation: {
    createClient: async (_, args) => {
      const result = await addClient(args.input);

      pubsub.publish('USER_CREATED', { userCreated: result });


      return result;
    },
    updateClient: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      if (contextValue.user.id !== args.id) {
        throw new Error('Forbidden');
      }

      return editClient({ id: args.id, ...args.input });
    },
    removeClient: (_, args) => {
      return removeUser({ id: args.id });
    },
  },
  Subscription: {
    clientCreated: {
      subscribe: () => pubsub.asyncIterator(['CLIENT_CREATED']),
    },
  },
};

export default { typeDefs, resolvers };
