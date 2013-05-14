var db = require('./../db'),
    BSON = require('mongodb').BSONPure,
    collectionName = 'todos-dev';

exports.findAll = function(req, res) {
  db.collection(collectionName, function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.json(items);
    });
  });
};

exports.findById = function(req, res) {
  var id = req.params.id;
  db.collection(collectionName, function(err, collection) {
      collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, todo) {
        res.json(todo);
      });
  });
};

exports.addTodo = function(req, res) {
  var todo = req.body;
  db.collection(collectionName, function(err, collection) {
      collection.insert(todo, {safe: true}, function(err, rs) {
        if (err) res.json(500, {'error': 'Error creating todo.'});
        res.json(todo);
      });
  });
};

exports.updateTodo = function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  db.collection(collectionName, function(err, collection) {
      collection.update({'_id': new BSON.ObjectID(id)}, todo, {safe: true}, function(err, rs) {
        if (err) res.json(500, {'error': 'Error updating todo.'});
        res.json(todo);
      });
  });
};

exports.deleteTodo = function(req, res) {
  var id = req.params.id;
    db.collection(collectionName, function(err, collection) {
      collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function(err, rs) {
        if (err) res.json(500, {'error': 'Error deleting todo.'});
        res.json(req.body);
      });
  });
};