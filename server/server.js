const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var todoModel = mongoose.model('todoModel', {
  text : {
    type : String,
    required: true,
    minlength: 3,
    trim: true
  },
  completed : {
    type : Boolean,
    default: false
  },
  completedAt : {
    type : Number,
    default: null
  }
});
// var newTodo = new todoModel({
//   text : 'Eat Dinner',
//   completed : false
// });
// newTodo.save().then((doc) => {
//   console.log('Saved document', doc);
// }, (err) => {
//   console.log('Unable to add new todo document to database');
// });

// newTodo = new todoModel({
//   text: '  Hello mongoose  '
// });

// newTodo.save().then((doc) => {
//   console.log('Saved document\n', doc);
// }, (err) => {
//   console.log('Unable to add new todo document to database', err);
// });

var user = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    minlength: 1
  }
});

newTodo = new user({
  email: '  hello@gmail.com  '
})

newTodo.save().then((doc) => {
  console.log('Saved document\n', doc);
}, (err) => {
  console.log('Unable to add new todo document to database', err);
});
