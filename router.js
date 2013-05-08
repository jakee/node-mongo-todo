var todos = require("./routes/todos");

exports.initRoutes = function(app) {

  // index route
  app.get('/', function(req, res) {
    res.render('index', {hello: "Hello World!", todos: []});
  });

  app.get('/todos', todos.findAll);
  app.get('/todos/:id', todos.findById);
  app.post('/todos', todos.addTodo);
  app.put('/todos/:id', todos.updateTodo);
  app.delete('/todos/:id', todos.deleteTodo);
};