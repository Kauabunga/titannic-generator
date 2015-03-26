/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {

      console.log('mooofdosoafsdodfsodsafd');
      console.log('mooofdosoafsdodfsodsafd');
      console.log('mooofdosoafsdodfsodsafd');
      console.log('mooofdosoafsdodfsodsafd');
      console.log('mooofdosoafsdodfsodsafd');
      console.log('mooofdosoafsdodfsodsafd');

      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');

      res.sendfile(app.get('appPath') + '/index.html');
    });
};
