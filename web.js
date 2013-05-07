var express = require("express"),
    stylus = require("stylus"),
    app = express();

app.configure(function() {
  app.use(express.logger());

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
  res.render('index', {hello: "Hello World!"});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});