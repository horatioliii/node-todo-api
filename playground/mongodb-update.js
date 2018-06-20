//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Success!');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5b2a9d2f3c16346c362d957a'),
    }, {
        $set: {
            name: 'lsh'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});