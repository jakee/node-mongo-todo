define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var AppRouter = Backbone.Router.extend({

    routes : {
      '': 'index',
      '!/todos': 'listTodos',
      '!/todos/new': 'showTodo',
      '!/todos/:id': 'showTodo'
    },

    initialize: function() {
      _.bindAll(this);
      console.log('Router initialized');
    },

    index: function() {
      console.log('/index called');
      this.navigate('!/todos', {trigger: true, replace: true}); // temporary
    },

    listTodos: function() {
      console.log('/todos called');
      Backbone.trigger("todos:show");
    },

    showTodo: function(id) {
      if (!id) console.log('/todos/new called');
      if (id) console.log('/todos with id ' + id + ' called');
      Backbone.trigger("todos:open", id);
    }

  });

  return new AppRouter();
});