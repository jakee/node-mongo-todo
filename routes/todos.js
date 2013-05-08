var db = require('./../db');

exports.findAll = function(req, res) {
  db.collection('todos-dev', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.json(items);
    });
  });
};

exports.findById = function(req, res) {
  var id = req.params.id;
};

exports.addTodo = function(req, res) {
  var todo = req.body;
  db.collection('todos-dev', function(err, collection) {
      collection.insert(todo, {safe: true}, function(er, rs) {
        res.json(rs);
      });
  });
};

exports.updateTodo = function(req, res) {
  var id = req.params.id;
};

exports.deleteTodo = function(req, res) {
  var id = req.params.id;
};