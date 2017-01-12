// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring
// Creating a custom object id
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('58776ad62b9a360fa45e7b8e')
    //   // completed: false
    // }).toArray().then((docs) => {
    //   console.log("Todos");
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to fetch todos");
    // });

    db.collection('Todos').find().count().then((count) => {
      console.log("Todos count:" , count);

    }, (err) => {
      console.log("Unable to fetch todos");
    });

    // db.close();
});
