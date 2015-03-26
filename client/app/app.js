'use strict';

angular.module('titannicGeneratorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $injector, INIT) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    var MAIN_PAGE = $injector.get('MAIN_PAGE');

    //console.log(angular.injector(['titannicGeneratorApp']).get('INIT'));

    console.log('INIT', INIT);

    for(var state in INIT.stateStructure) {

      if (INIT.stateStructure.hasOwnProperty(state)) {
        var currentState = INIT.stateStructure[state];

        var currentPresentation = $injector.get(currentState.presentation);


        var currentTemplate = '',
            i;

        for(i = 0; i < currentPresentation.pageStructure.length; i++){

          var presentationComponent = $injector.get(currentPresentation.pageStructure[i].name);



          currentTemplate = currentTemplate + '<div ng-include="\'' + presentationComponent.presentationTemplate + '\'"></div>';
        }

        console.log(currentTemplate);


        $stateProvider.state(currentState.name, {
          url: currentState.url,
          //templateUrl: 'app/main/main.html',
          template: currentTemplate,
          controller: 'MainCtrl'
        });

      }

    }


  })

//docs.google.com/uc?id=0B84YdCmz0nrQY2lOcDNkVjYwN00&export=download&random=56959.93462577462

.run(function($http, $log){
  $http.get('https://docs.google.com/uc?id=0B84YdCmz0nrQY2lOcDNkVjYwN00&export=download&random=56959.93462577462').success(
    function success(response){
      $log.debug('success response', response);
    })
    .error(function error(response, status){
        $log.error('error response', response, status);
      });

});
