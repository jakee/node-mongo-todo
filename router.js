var todos = require("./routes/todos"),
    fs = require("fs");

exports.initRoutes = function(app) {

  // index route
  app.get('/', function(req, res) {
    res.render('index', {hello: "Hello World!", todos: []});
  });
  // serve templates 
  app.all('/templates/*', function(req, res) {
    var path = __dirname + '/assets/templates/' + req.params[0];
    path = path.replace(/\.html$/,'') + '.jade';
    if (!fs.existsSync(path)) return res.send(404);
    res.render(path);
  });

  app.get('/todos', todos.findAll);
  app.get('/todos/:id', todos.findById);
  app.post('/todos', todos.addTodo);
  app.put('/todos/:id', todos.updateTodo);
  app.delete('/todos/:id', todos.deleteTodo);
};