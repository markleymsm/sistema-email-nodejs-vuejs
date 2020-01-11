let express = require('express');
let router = express.Router();
let User = require('../src/models/user');

/* GET users listing. */
router.get('/me', function (req, res, next) {
  // res.send('respond with a resource');
  let callback = function (err, user) {
    if (err) {
      return res.status(500).json({ err: err });
    }

    if (!user) {
      return res.status(404).json({ user: null });
    }
    return res.status(200).json({ user: user });
  }
  User.findById('', callback);
});

router.get('/register', function (req, res, next) {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    accounts: [{
      name: req.body.account_name,
      role: 'owner',
      enabled: true
    }]
  };

  let callback = function (err, user) {
    if (err) {
      return res.status(422).json({ err: err });
    }
    return res, status(200).json({ user: user });

  };

  User.create(data, callback);
});

module.exports = router;
