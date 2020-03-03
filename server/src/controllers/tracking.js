const campaignModel = require('../models/campaign');
const leadModel = require('../models/lead');

module.exports = function () {
    let open = function (req, res) {
        let campaignId = req.params.id;
        let leadId = req.params.id;
    };

    let click = function (req, res) {
        let campaignId = req.params.id;
        let leadId = req.params.id;
    };

    let controller = {
        open: open(),
        click: click()
    };

    return controller;
};