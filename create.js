import factory from './database/factory';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = () => mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true
})

const createPerson = async () => {
  const db = await connectDatabase();

  const person = await factory.create('Person')

  await db.disconnect();

  console.log('Person created: ', person);
}

createPerson();