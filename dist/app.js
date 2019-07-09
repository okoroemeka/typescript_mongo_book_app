"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const bookController = require("./controllers/bookController");
const app = express();
app.set('port', 3200);
app.use(bodyParser.json());
app.get('/books', bookController.allBooks);
app.get('/books/:id', bookController.getBook);
app.post('/books', bookController.addBook);
app.delete('/books/:id', bookController.deleteBook);
app.put('/books/:id', bookController.updateBook);
app.listen(app.get('port'), () => console.log(`app listening on http://localhost:${app.get('port')}`));
//# sourceMappingURL=app.js.map