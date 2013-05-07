var express = require("express"),
    app = express();

app.configure(function() {
  app.use(express.logger());
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: true});
});

app.get('/', function(req, res) {
  res.render('index', {hello: "Hello World!"});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});