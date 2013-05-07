var mongo = require('mongodb');
var mongoUri = process.env.MURL || require('./config').mongoUri;

// operation has to be of the form function(err, collection)
exports.connect = function(col, operation) {
  mongo.Db.connect(mongoUri, function(err, db) {
    db.collection(col, operation);
  });
};