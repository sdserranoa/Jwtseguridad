const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = '/////';

const dbName = 'Cluster0';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(db, client);
    });
}

const postUser = function (user, db, callback) {
    const collection = db.collection('seguridad');
    collection.insertOne(user).then(callback(user));
}

const findUserById = function (usernameU, db, callback) {

    const collection = db.collection('seguridad');
    collection.find({ username: usernameU }).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

exports.getDatabase = getDatabase;
exports.findUserById = findUserById;
exports.postUser = postUser;
