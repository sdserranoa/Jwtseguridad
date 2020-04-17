const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://usuario1:usuario1@cluster0-ukami.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'Cluster0';

const client = new MongoClient(url, { useUnifiedTopology: true });

const postUser = function (user, db, callback) {
    const collection = db.collection('seguridad');
    collection.insertOne(user).then(callback(user));
}