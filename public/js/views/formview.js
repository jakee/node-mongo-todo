define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var FormView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this);
    },

    render: function() {

    }

  });

  return FormView;
});