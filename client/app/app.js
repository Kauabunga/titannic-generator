'use strict';

angular.module('titannicGeneratorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $injector, APP) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);


    for(var state in APP.value.stateStructure) {

      if (APP.value.stateStructure.hasOwnProperty(state)) {

        var currentState = APP.value.stateStructure[state];
        var currentPresentation = $injector.get(currentState.presentation).value;

        var currentTemplate = '';
        var currentContent = {};
        var i;


        for(i = 0; i < currentPresentation.pageStructure.length; i++){
          var component = $injector.get(currentPresentation.pageStructure[i].component).value;
          currentTemplate = currentTemplate + '<div ng-include="\'' + component.presentationTemplate + '\'"></div>';
          currentContent[component.content] = $injector.get(component.content);
        }


        $stateProvider.state(currentState.name, {
          url: currentState.url,
          template: currentTemplate,
          controller: 'MainCtrl',
          content: currentContent
        });

      }

    }


  });


angular.module('titannicGeneratorApp').run(function($http, $log){

});
