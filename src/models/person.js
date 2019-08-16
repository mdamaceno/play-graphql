import { Schema, model } from 'mongoose';

const personSchema = new Schema({
  firstname: String,
  lastname: String,
  birthdate: Date,
  photo: String,
  created_at: Date,
  updated_at: Date
});

const Person = model('Person', personSchema);

export default Person;