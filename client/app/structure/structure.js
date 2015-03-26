'use strict';


/**
 * main state
 */

angular.module('titannicGeneratorApp')
  .constant('INIT', {


    stateStructure: {
      mainState: {
        name: 'main',
        url: '/',
        presentation: 'MAIN_PAGE',
        presentationDoc: ''
      },
      aboutState: {
        name: 'about',
        url: '/url',
        presentation: 'ABOUT_PAGE',
        presentationDoc: ''
      }
    }

  });


/**
 * Pages
 */
angular.module('titannicGeneratorApp')
  .constant('MAIN_PAGE', {

    pageStructure: [
      {
        name: 'NAVIGATION_COMPONENT'
      },
      {
        name: 'HEADER_COMPONENT'
      },
      {
        name: 'INTRODUCTION_COMPONENT'
      },
      {
        name: 'FOOTER_COMPONENT'
      }
    ]

  });


angular.module('titannicGeneratorApp')
  .constant('ABOUT_PAGE', {

    pageStructure: [
      {
        name: 'NAVIGATION_COMPONENT'
      },
      {
        name: 'HEADER_COMPONENT'
      },
      {
        name: 'PEOPLE_COMPONENT'
      },
      {
        name: 'FOOTER_COMPONENT'
      }
    ]

  });





/**
 * Components
 */

angular.module('titannicGeneratorApp')
  .constant('NAVIGATION_COMPONENT', {

    //jade/html component template
    presentationTemplate: 'components/navbar/navbar.html',
    //document reference
    contentReference: ''

  });

angular.module('titannicGeneratorApp')
  .constant('HEADER_COMPONENT', {

    presentationTemplate: 'components/header/header.html',
    contentReference: ''

  });

angular.module('titannicGeneratorApp')
  .constant('PEOPLE_COMPONENT', {

    presentationTemplate: 'components/people/people.html',
    contentReference: ''

  });

angular.module('titannicGeneratorApp')
  .constant('INTRODUCTION_COMPONENT', {

    presentationTemplate: 'components/introduction/introduction.html',
    contentReference: ''

  });


angular.module('titannicGeneratorApp')
  .constant('FOOTER_COMPONENT', {

    presentationTemplate: 'components/footer/footer.html',
    contentReference: ''

  });

