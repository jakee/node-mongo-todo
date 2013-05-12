define([
  'jquery',
  'underscore',
  'backbone',
  'views/todosview',
  'views/todoview'
], function($, _, Backbone, TodosView, TodoView) {
  var AppView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
      this.todosView = new TodosView({ el: this.$el.find('#todos') });
      this.listenTo(Backbone, 'todos:new todos:open', this.openTodo);
      this.listenTo(Backbone, 'todo:close', this.showTodos);
    },

    render: function() {
      this.todosView.render();
    },

    openTodo: function(model) {
      this.todoView = new TodoView({ model: model });
      this.todosView.hide();
      this.$el.append(this.todoView.el);
      this.todoView.render();
    },

    showTodos: function() {
      this.todoView.remove();
      this.todosView.show();
    }

  });

  return AppView;
});