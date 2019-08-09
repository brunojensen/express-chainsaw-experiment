const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.get('/', (req, res, next) => {
  User.find()
      .exec()
      .then(users => res.json(users))
      .catch(error => next(error))
}).post('/', (req, res, next) => {
  const user = new User({
    name: req.body.name,
    surname: req.body.surname  
  });
  user.save()
    .then(() => res.json(user))
    .catch(error => next(error));
});

module.exports = router;
