const model = require('../models/list');
const CrudService = require('../services/crud');

const service = new CrudService(model);

module.exports = function () {
    return {
        index: function (req, res) {
            service.list().then((result) => {
                return res.json(result);
            });
        },
        add: function (req, res) {
            service.insert(req.body).then((result) => {
                return res.json(result);
            }).catch((err) =>{
                return res.status(422).json(err);
            });
        }
    }
};