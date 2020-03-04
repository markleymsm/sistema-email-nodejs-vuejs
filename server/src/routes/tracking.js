module.exports = function (app) {
    let controller = require('../controllers/trackin')();

    app.get('/campaigns/tracking/open/:', controller.index);

}