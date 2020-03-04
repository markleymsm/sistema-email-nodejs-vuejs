const campaignModel = require('../models/campaign');
const leadModel = require('../models/lead');

module.exports = function () {
    let open = function (req, res) {
        let campaignId = req.params.id;
        let leadId = req.params.leadid;

        campaignModel.findById(campaignId, function (err, campaign) {
            if (err) {
                return err;
            }
            campaign.opens += 1;
            campaign.save();
        });

        leadModel.findById(leadId, function (err, lead) {
            if (err) {
                return err;
            }

            if (!lead) {
                return;
            }

            let actions = lead.actions;
            actions.push({
                campaign: campaignId,
                actions: [{
                    typeAction: 'open',
                    link: '',
                    date: new Date()
                }]
            });

            lead.actions = actions;
            lead.save();
        });

        let buf = new Buffer(35);
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.end(buf, 'binary');
    };

    let click = function (req, res) {
        let campaignId = req.params.id;
        let leadId = req.params.leadid;
    };

    let controller = {
        open: open(),
        click: click()
    };

    return controller;
};