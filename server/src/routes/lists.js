module.exports = function (app) {
    let controller = require('../controllers/lists')();

    app.get('/api/lists', controller.index);
    app.post('/api/lists', controller.add);
}