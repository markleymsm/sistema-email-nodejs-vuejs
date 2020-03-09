const mailgun = require("mailgun.js");
const DOMAIN = 'sandboxce27da11381c4450bcbf6398917a0238.mailgun.org';
const mg = mailgun({apiKey: '291927c463279aac3eda77b642e5cbea-c322068c-61bca2bd', domain: DOMAIN});
// const data = {
//     from: 'Excited User <me@samples.mailgun.org>',
//     to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!'
// };


module.exports = function (to, subject, html) {
    return mg.messages().create(DOMAIN, {
        from: 'Minha Empresa <markley.mendes@gmail.com>',
        to: [to],
        subject: subject,
        text: html
    })
        .then(msg => console.log(msg))
        .catch(err => console.log(err));

    // mg.messages().send(data, function (error, body) {
    //     console.log(body);
    // });

}