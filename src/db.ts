import mongoose from 'mongoose';
require('dotenv').config();

//allow filtering by property not in the schema
mongoose.set('strictQuery', false);

const uri = String(process.env.MONGO_URI);
console.log(uri);

//connect to mongodb

mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//define schema
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  id: { type: Number, required: false, },
  date: { type: String, required: true, },
  note: { type: String, required: true, },
});

export const NoteModel = mongoose.model("NoteModel", NoteSchema);