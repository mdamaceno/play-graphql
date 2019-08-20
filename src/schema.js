import { gql } from 'apollo-server';
import fs from 'fs';
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';
import { mapResolvers } from './resolvers';

/**
 * Allows loading gql and graphql files as text files
 */
require.extensions['.gql'] = require.extensions['.graphql'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

export const typeDefs = gql(require('./schema.gql'));

export const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  ...mapResolvers
}