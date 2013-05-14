require.config({
  paths: {
    jquery: "vendor/jquery/jquery",
    autoresize: "vendor/jquery/autoresize.jquery",
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
    'autoresize': {
      deps: ['jquery'],
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'autoresize', 'underscore'],
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