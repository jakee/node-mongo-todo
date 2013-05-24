define([
  'jquery',
  'underscore',
  'backbone',
  'views/todosview',
  'views/todoview',
  'todos'
], function($, _, Backbone, TodosView, TodoView, todos) {
  var AppView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
      this.listenTo(Backbone, 'todos:new todos:open', this.openTodo);
      this.listenTo(Backbone, 'todos:show', this.showTodos);
    },

    openTodo: function(id) {
      var model = todos.get(id);
      this.todoView = new TodoView({ model: model });
      if (this.todosView) this.todosView.hide();
      this.$el.append(this.todoView.el);
      this.todoView.render();
    },

    showTodos: function() {
      if (this.todoView) this.todoView.remove();
      if (this.todosView) return this.todosView.show();
      this.todosView = new TodosView({ el: this.$el.find('#todos') });
    }

  });

  return AppView;
});