import { mapFunctions } from './functions';

export const mapResolvers = {
  Query: {
    people: mapFunctions(['people']),
    books: mapFunctions(['books']),
    movies: mapFunctions(['movies']),
  },
  Book: {
    movies: mapFunctions(['moviesByBook'])
  }
}
