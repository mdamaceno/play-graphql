import { mapFunctions } from './functions';

export const mapResolvers = {
  Query: {
    people: mapFunctions(['people']),
    books: mapFunctions(['books']),
    movies: mapFunctions(['movies']),
    person: mapFunctions(['getPerson'])
  },
  Mutation: {
    createPerson: mapFunctions(['createPerson']),
    deletePerson: mapFunctions(['deletePerson']),
    updatePerson: mapFunctions(['updatePerson'])
  },
  Book: {
    movies: mapFunctions(['moviesByBook'])
  }
}
