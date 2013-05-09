define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var Todo = Backbone.Model.extend({});

  var Todos = Backbone.Collection.extend({
    url: "/todos",
    model: Todo
  });

  return {
    Todo: Todo,
    Todos: Todos
  };
});