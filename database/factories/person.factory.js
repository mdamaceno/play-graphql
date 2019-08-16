import faker from 'faker';
import moment from 'moment';
import Person from '../../src/models/person';
import { factory } from 'factory-girl';

const now = moment().format('YYYY-MM-DD HH:mm:ss').toString();

factory.define('Person', Person, {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  birthdate: faker.date.past(),
  photo: null,
  created_at: now,
  updated_at: now,
});

export default factory;