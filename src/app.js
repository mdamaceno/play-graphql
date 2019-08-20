import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';

import { typeDefs, resolvers } from './schema';

dotenv.config();

const createConnection = () => {
  mongoose.connect(process.env.DB_CONNECTION, {
    useFindAndModify: false,
    useNewUrlParser: true
  })
    .catch((err) => {
      throw err;
    });
}

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => ({ req, res })
  });

  await createConnection();

  const app = express();

  server.applyMiddleware({
    app
  });

  app.listen({port: 4000}, () =>
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

startServer();