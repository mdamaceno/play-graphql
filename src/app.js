import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { typeDefs, resolvers } from './schema';

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .catch((err) => {
    throw err;
  });

export default new ApolloServer({ typeDefs, resolvers });
