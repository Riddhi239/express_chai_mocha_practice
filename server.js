const express = require('express');
const mongoose = require('mongoose');
const ClaimRoutes = require('./src/route/route')
const app = express();

let port = 4000;
app.use(
    express.urlencoded({
        extended: false,
    })
);
mongoose.connect('mongodb+srv://mohanyalla904:mohan111@cluster0.kr0m9ss.mongodb.net/?retryWrites=true&w=majority/mydb')
const connection = mongoose.connection;
connection.once('open', function() {
    console.log(' Database connection is done');
})

app.use('/book', BookRoutes);
app.listen(port, () => {
    console.log('Server is running on ${port}')
});