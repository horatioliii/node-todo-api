//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Success!');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: ObjectID("5b2ac65f3192d7a477c3c16a")
    }).then((result) => {
        console.log(result);
    });
    //client.close();
});