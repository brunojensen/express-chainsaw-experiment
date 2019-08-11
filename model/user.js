const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Counter', 
  new mongoose.Schema({
      name: {
        type: String
      },
      surname: {
        type: String
      }
    }).pre('save', function(next) {
      console.log('pre-save');
      next();
    })
);
