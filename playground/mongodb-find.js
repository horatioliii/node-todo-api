//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Success!');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos cound: ${count}`);
    // }, (err) => {
    //     console.log(`Unable to fetch Todos ${err}`)
    // });

    db.collection('Users').find({name: 'Shuanghao'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    //client.close();
});