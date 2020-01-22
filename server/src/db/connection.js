let mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/email_marketing', { useMongoClient: true }, function (err) {
// mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, function (err) {
    if (err) {
        console.log('Mongoose error =>', err);
    }
    console.log('Mongoose connected');
});

module.exports = mongoose; 