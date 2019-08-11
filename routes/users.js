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
}).put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id, 
    {
      name: req.body.name,
      surname: req.body.surname  
    })
    .then(user => res.json(user))
    .catch(error => next(error));
}).get('/:id', (req, res, next) => {
  User.findById(req.params.id)
      .exec()
      .then(user => res.json(user))
      .catch(error => next(error))
}).delete('/:id', (req, res, next) => {
  User.deleteOne({_id: req.params.id})
      .exec()
      .then(user => res.sendStatus(204))
      .catch(error => next(error))
});

module.exports = router;
