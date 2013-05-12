define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var Todo = Backbone.Model.extend({
    defaults: {
      title: "",
      task: ""
    },

    validate: function(attrs, options) {
      var errors = {};
      if (!attrs.title) {
        errors["title"] = "Your To-Do has to have at least a title!";
      }
      if(!_.isEmpty(errors)) return errors;
    }
  });

  var Todos = Backbone.Collection.extend({
    url: "/todos",
    idAttribute: "_id",
    model: Todo
  });

  return {
    todos: new Todos()
  };
});