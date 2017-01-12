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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'ggwp'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'ggwp'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
    });

    // db.close();
});
