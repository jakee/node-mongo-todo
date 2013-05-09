define([
  'jquery',
  'underscore',
  'backbone',
  'todos',
  'hbs!/templates/todo'
], function($, _, Backbone, collections, todoTemplate) {

  var todos = new collections.Todos();

  var TodosView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
      this.listenTo(todos, 'reset', this.render);
      todos.fetch();
    },

    render: function() {
      this.todos.each(function(todo) {
        var view = new TodoView({ model: todo });
        this.$el.append(view.render().el);
      }, this);
      return this;
    }

  });

  var TodoView = Backbone.View.extend({

    className: 'todo', 

    initialize: function() {
      _.bindAll(this);
    },

    render: function() {
      this.$el.html(todoTemplate(this.model.toJSON()));
    }

  });

  return TodosView;
});