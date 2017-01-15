const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todouser:$TheSpecialUser$@ds145828.mlab.com:45828/todoapp');

module.exports = {
  mongoose
};
