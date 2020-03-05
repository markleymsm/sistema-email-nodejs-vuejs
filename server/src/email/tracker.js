module.exports = function (body, campaignId, leadId) {
    let img = '<img src="/campaigns/tracking/open/' + campaignId + '/' + leadId + '">';
    let ulr_tracking = '/campaigns/tracking/click/' + campaignId + '/' + leadId + '?link=';
    let regex = /<a href="(.*?)"/g;

    return body.replace(regex, "/<a href=\"" + ulr_tracking + "$1\"") + img;
}