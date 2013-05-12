define([
  'jquery',
  'underscore',
  'backbone',
  'todos',
  'hbs!/templates/todo'
], function($, _, Backbone, collections, todoEditTemplate) {

  var todos = collections.todos;

  var TodoEditView = Backbone.View.extend({

    tagName: 'article',
    id: 'todo',

    events: {
      "click .save": "save",
      "click .cancel": "cancel",
      "click .delete": "delete"
    },

    initialize: function() {
      _.bindAll(this);
      this.model || (this.model = collections.todos.create());
      this.registerEvents(); 
    },

    render: function() {
      this.$el.html(todoEditTemplate(this.model.toJSON()));
      return this;
    },

    registerEvents: function() {
      this.listenTo(this.model, 'error invalid', this.showMessage);
      this.listenTo(this.model, 'sync', this.close);
    },

    save: function() {
      this.close();
    },

    cancel: function() {
      this.close();
    },

    delete: function() {
      this.close();
    },

    close: function() {
      Backbone.trigger("todo:close");
    }

  });

  return TodoEditView;
});