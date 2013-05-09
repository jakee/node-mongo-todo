define([
  'jquery',
  'underscore',
  'backbone',
  'views/todosview',
  'views/formview'
], function($, _, Backbone, TodosView, FormView) {
  var AppView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
      this.todosView = new TodosView({ el: this.$el.find('.todos')});
      this.formView = new FormView({ el: this.$el.find('.create-todo') });
    },

    render: function() {
      this.todosView.render();
      this.formView.render();
    }

  });

  return AppView;
});