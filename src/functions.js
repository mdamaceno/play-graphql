import books from '../data/books';
import movies from '../data/movies';
import Person from './models/person';

const getMethods = () => ({
  books: getBooks,
  movies: getMovies,
  people: getPeople,
  moviesByBook: getMoviesByBook
})

export const getBooks = async () => await books;

export const getMovies = async () => await movies;

export const getMoviesByBook = async (book) => {
  return await movies.filter(movie => movie.book_id == book.id);
}
export const getPeople = async () => await Person.find();

export const mapFunctions = (pick = []) => {
  let methods = getMethods();

  if (pick.length > 0) {
    const filtered = Object.keys(methods)
      .filter(key => pick.includes(key))
      .reduce((obj, key) => {
        obj[key] = methods[key];
        return obj;
      }, {});

    return filtered;
  }

  return methods;
}