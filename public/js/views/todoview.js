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
      "input form": "updateModel",
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
      this.$el.find('textarea').autoResize().trigger('change.dynSiz');
      this.delegateEvents();
      return this;
    },

    updateModel: function(event) {
      var $source = $(event.target),
          attr = $source.attr('name'),
          val = $source.val();
      this.model.set(attr, val, {validate: true});
    },

    registerEvents: function() {
      this.listenTo(this.model, 'error invalid', this.showMessage);
      this.listenTo(this.model, 'sync', this.close);
    },

    save: function() {
      if (this.model.isNew() || this.model.hasChanged()) {
        this.model.save();
      }
    },

    cancel: function() {
      if (this.model.isNew()) {
        this.delete();
      } else if (this.model.hasChanged()) {
        this.model.fetch();
      } else {
        this.close();
      }

    },

    delete: function() {
      console.log('delete');
      this.model.destroy();
    },

    close: function() {
      this.model = null;
      Backbone.trigger("todo:close");
    }

  });

  return TodoEditView;
});