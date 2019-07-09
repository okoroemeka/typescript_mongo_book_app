import * as mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/locale';

mongoose.connect(uri, (error: any) => {
  if (error) console.log(error.message);
  else {
    console.log('sucessfully connected to mongodb database');
  }
});

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
