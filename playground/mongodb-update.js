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
    // (filter, update, options, callback)
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('58778a657237e30d3a85bd03')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('58776c5b8292cf09608863fb')
    }, {
      $set: {
        name: 'Joe'
      },
      $inc: {
        age: 10
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })



    // db.close();
});
