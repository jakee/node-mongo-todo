define([
  'views/appview'
], function(AppView) {

  var initialize = function() {
    new AppView({ el: $('.app') });
  };

  return {
    initialize: initialize
  };
});