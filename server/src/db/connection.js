let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://mongo:27017/email_marketing', { useMongoClient: true }, function (err) {
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useMongoClient: true }, function (err) {
// mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }, function (err) {
    if (err) {
        console.log('Mongoose error =>', err);
    }
    console.log('Mongoose connected');
});

module.exports = mongoose; 