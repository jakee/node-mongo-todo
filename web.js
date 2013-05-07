var express = require("express"),
    stylus = require("stylus"),
    db = require("./db"),
    app = express();

app.configure(function() {
  app.use(express.logger());
  app.use(express.bodyParser());
  // templating settings
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: true});

  // stylesheet compilation
  app.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public',
    compile: function(str, path) {
      return stylus(str)
      .set('filename', path)
      .set('compress', true);
    }
  }));
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  // db.connect('todos-dev', function(err, collection) {
  //  collection.insert({testkey: "testvalue"}, {safe: true}, function(er, rs) {});
  // });
  res.render('index', {hello: "Hello World!", todos: []});
});

app.post('/todos', function(req, res) {
  var todo = req.body;
  db.connect('todos-dev', function(err, collection) {
    collection.insert(todo, {safe: true}, function(er, rs) {});
  });
  res.send("Success!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});