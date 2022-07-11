const Book = require('../model/model');

module.exports.getBooks = async(request, response) => {

    try {
        let book = await Claim.find();
        response.status(200).send({ success: true, claim });
    } catch (error) {
        console.log(error);
        response.status(400).send({ success: false, message: error.message });
    }
}
module.exports.addBook = async(request, response) => {
    try {
        const { name, dop, author } = request.body;
        let book = new Book({ name, dop, author });
        let result = await book.save();
        response.send({ success: true, book });
    } catch (error) {
        console.log(error)
    }
}

module.exports.updateBook = async(request, response) => {
    try {
        let book = await Book.findOne({ _id: request.params.id })
        if (!book)
            response.send({ success: false, message: 'Bookrecord does not exist' })
        let { name, dop, author } = request.body
        let updatedbook = { name, dop, author }
        let result = await Book.updateOne({ _id: request.params.id }, updatedbook);

        response.send({ success: true, book: { id: request.params.id, } });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }
}
module.exports.deleteBook = async(request, response) => {
    try {
        let result = await Book.updateOne({ _id: request.params.id }, updatedbook);

        response.status(200).json({ success: true, claim: { id: request.params.id, } });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }
}
module.exports.getBook = async(request, response) => {
    try {
        let claim = await Book.findOne({ _id: request.params.id })

        response.send({ success: false, message: 'Bookrecord does not exist' })
    } catch (error) { response.status(400).send({ success: false, message: error.message }); }
}