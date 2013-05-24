define([
  'views/appview',
  'router'
], function(AppView) {

  var initialize = function() {
    new AppView({ el: $('.app') });
    console.log(Backbone.history.start());
  };

  return {
    initialize: initialize
  };
});