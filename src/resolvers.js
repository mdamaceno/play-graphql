import { mapFunctions, getMoviesByBook } from './functions';

export const mapResolvers = {
  Query: {
    ...mapFunctions(['books', 'movies', 'people'])
  },
  Book: {
    movies: getMoviesByBook
  }
}