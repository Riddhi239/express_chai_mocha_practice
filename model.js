const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClaimSchema = new Schema({
    name: {
        type: String
    },
    dop: {
        type: Date
    },
    author: {
        type: String
    },
})
var Book = mongoose.model('book', BookSchema);
module.exports = Book