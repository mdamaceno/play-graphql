import { compact } from './helpers';
import booksData from '../data/books';
import moviesData from '../data/movies';
import Person from './models/person';

function getMethods () {
  return compact(
    books,
    movies,
    people,
    moviesByBook,
    getPerson,
    createPerson,
    deletePerson,
    updatePerson
  )
}

const books = async function () { return await booksData }
const movies = async function () { return await moviesData }
const people = async function  () { return await Person.find() }
const moviesByBook = async function (book) {
  return await movies.filter(movie => movie.book_id == book.id);
}
const getPerson = async function (parent, { id }) {
  return await Person.findById(id);
}
const createPerson = async function (parent, { input }) {
  return await Person(input).save();
}
const deletePerson = async function (parent, { id }) {
  return await Person.findByIdAndDelete(id);
}
const updatePerson = async function (parent, { id, input }) {
  return Person.findByIdAndUpdate(id, { $set: input });
}

export const mapFunctions = (pick = []) => {
  let filtered = Object.keys(getMethods())
    .filter(key => pick.includes(key))
    .reduce((obj, key) => {
      return getMethods()[key];
    }, {});

  return filtered;
}

