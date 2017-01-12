// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: "Something to do",
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Arvind",
    //     age: 19,
    //     location: "Mumbai"
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert into users');
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));//result.ops stores the inserted document
    // });

    db.close();
});
