import { compact } from './helpers';
import booksData from '../data/books';
import moviesData from '../data/movies';
import Person from './models/person';

function getMethods () {
  return compact(
    books,
    movies,
    people,
    moviesByBook
  )
}

const books = async function () { return await booksData }
const movies = async function () { return await moviesData }
const people = async function  () { return await Person.find() }
const moviesByBook = async function (book) {
  return await movies.filter(movie => movie.book_id == book.id);
}

export const mapFunctions = (pick = []) => {
  let filtered = Object.keys(getMethods())
    .filter(key => pick.includes(key))
    .reduce((obj, key) => {
      return getMethods()[key];
    }, {});

  return filtered;
}

