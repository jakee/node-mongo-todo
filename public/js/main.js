require.config({
  paths: {
    jquery: "vendor/jquery/jquery",
    underscore: "vendor/underscore/underscore",
    backbone: "vendor/backbone/backbone",
    Handlebars: "vendor/require/Handlebars",
    i18nprecompile: "vendor/require/hbs/i18nprecompile",
    json2: "vendor/require/hbs/json2",
    hbs: "vendor/require/hbs"
  },

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  },

  hbs: {
    disableI18n: true,
    disableHelpers: true,
    templateExtension: "html"
  }
});

require(['app'], function(App) {
  App.initialize();
});