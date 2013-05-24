define([
  'jquery',
  'underscore',
  'backbone',
  'todos',
  'router',
  'hbs!/templates/todoslistview',
  'hbs!/templates/todolistitem'
], function($, _, Backbone, todos, Router,todosListTemplate, todoTemplate) {

  var TodosListView = Backbone.View.extend({

    events: {
      "click .important": "sortTodos",
      "click .urgent": "sortTodos"
    },

    initialize: function() {
      _.bindAll(this);
      this.registerEvents();
      todos.fetch();
      this.$el.html(todosListTemplate());
      this.$list = this.$el.find('.list');
    },

    render: function() {
      this.$list.empty();
      console.log('render todos');
      todos.each(function(todo) {
        var view = new TodoListItemView({ model: todo });
        this.$list.append(view.render().el);
      }, this);
      return this;
    },

    show: function() {
      this.registerEvents();
      this.render();
      this.$el.show();
    },

    hide: function() {
      this.stopListening();
      this.$el.hide();
    },

    sortTodos: function(e) {
      var sortBy = $(e.target).attr('name');
      // sort todos
    },

    registerEvents: function() {
      this.listenTo(todos, 'sync', this.render);
    }

  });

  var TodoListItemView = Backbone.View.extend({

    tagName: 'section',
    className: 'todo',

    events: {
      "click": "open"
    },

    initialize: function() {
      _.bindAll(this);
    },

    render: function() {
      this.$el.empty();
      this.$el.html(todoTemplate(this.model.toJSON()));
      return this;
    },

    open: function() {
      Router.navigate('!/todos/' + this.model.id, {trigger: true});
    }

  });

  return TodosListView;
});