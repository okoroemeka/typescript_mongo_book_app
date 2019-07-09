"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/locale';
mongoose.connect(uri, (error) => {
    if (error)
        console.log(error.message);
    else {
        console.log('sucessfully connected to mongodb database');
    }
});
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
const Book = mongoose.model('Book', exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=book.js.map