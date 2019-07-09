"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../book");
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, books) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = (req, res) => {
    let book = book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.addBook = (req, res) => {
    let book = new book_1.default(req.body);
    book.save((err) => {
        if (!err)
            return res.send(book);
        return res.send(err);
    });
};
exports.deleteBook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (!err)
            return res.send('book deleted successfully');
        return res.send(err);
    });
};
exports.updateBook = (req, res) => {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (!err)
            return res.send('book updated successfully');
        return res.send(err);
    });
};
//# sourceMappingURL=bookController.js.map