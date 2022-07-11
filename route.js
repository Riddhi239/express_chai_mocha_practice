const express = require ('express');
const Claimcontroller = require('../controller/controller');
const Claim = require('..model/model');
const router = express.Router();

router.get('/',controller.getBooks);
router.post('/add', Controller.addBook);
router.put('/update/:id',Controller.updateBook);
router.delete('/delete/:id',deleteBook);
router.get('/:id',Controller.getBook);
module.exports = router;

