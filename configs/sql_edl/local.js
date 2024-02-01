var MongoClient = require('mongodb').MongoClient;
var dburl       =   "mongodb://127.0.0.1 :27017/factory";
MongoClient.connect(dburl, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});