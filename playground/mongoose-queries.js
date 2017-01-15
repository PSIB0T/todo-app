const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '58781edec6e62c9433de2436';

var id = '587acb0ebd901a4822f48b95';

if(!ObjectID.isValid(id)){
  console.log('Id not valid');
}

//Finds all records
Todo.find({
  _id: id
}).then((todos) => {

  console.log(JSON.stringify(todos, null, 2));
})

//Finds the first record

Todo.findOne({
  _id: id
}).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(todo, null, 2));
})


//Finds the record by id
Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(todo, null, 2));
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, null, 2));
}).catch((e) => console.log(e));
