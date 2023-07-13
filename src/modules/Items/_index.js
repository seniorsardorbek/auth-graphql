import { readFileSync } from 'fs';
import { join } from 'path';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import db from '../../db/index.js';
import { addItem, addItemSize } from './add-item.js';
import { listItems } from './list-items.js';
import { pubsub } from '../../graphql/pubsub.js';
import { showItem } from './showItem.js';
import { editItem } from './edit-user.js';
import { removeItem } from './remove-user.js';
// import { listItems } from './list-items.js';

const typeDefs = readFileSync(
  join(process.cwd(), 'src', 'modules', 'Items', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    items: (_, __, contextValue) => {
      isLoggedIn(contextValue);

      return listItems();
      // return  db("items").select("*");
    },
    item: (_, args) => {
      return showItem({ id: args.id });
    },
    item_sizes: (_, args) => {

      return db('item_sizes').select('*');
    },
  
  },
  Mutation: {
    createItem: async (_, args) => {
      const result = await addItem(args.input);

      pubsub.publish('ITEM_CREATED', { userCreated: result });

      return result;
    },
    createItemSize: async (_, args) => {
      console.log(args);
      const result = await addItemSize(args.input);

      pubsub.publish('ITEM_CREATED', { userCreated: result });

      return result;
    },
    updateItem: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      if (contextValue.user.id !== args.id) {
        throw new Error('Forbidden');
      }

      return editItem({ id: args.id, ...args.input });
    },
    removeItem: (_, args) => {
      return removeItem({ id: args.id });
    }
  },
  // Subscription: {
  //   userCreated: {
  //     subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
  //   },
  // },
  Item: {
    sizes: (parent) => {
      return listItems({ item_id: parent.id });
    },
  },
};

export default { typeDefs, resolvers };
