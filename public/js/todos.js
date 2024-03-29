define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var Todo = Backbone.Model.extend({
    idAttribute: "_id",
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
    model: Todo
  });

  return new Todos();
});