const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var todoModel = mongoose.model('todoModel', {
  text : {
    type : String
  },
  completed : {
    type : Boolean
  },
  completedAt : {
    type : Number
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

newTodo = new todoModel({
  text : 'Code!',
  completed : true,
  completedAt: 251
});

newTodo.save().then((doc) => {
  console.log('Saved document\n', doc);
}, (err) => {
  console.log('Unable to add new todo document to database');
});
