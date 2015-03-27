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
        presentation: 'MAIN_PAGE'
      },
      aboutState: {
        name: 'about',
        url: '/about',
        presentation: 'ABOUT_PAGE'
      }
    }

  });



/**
 * Pages
 */


angular.module('titannicGeneratorApp')
  .constant('MAIN_PAGE', {

    'type': 'page',
    'id': 'MAIN_PAGE',
    'document': '',
    'value': {
      pageStructure: [
        {
          component: 'NAVIGATION_COMPONENT'
        },
        {
          component: 'HEADER_COMPONENT'
        },
        {
          component: 'INTRODUCTION_COMPONENT'
        },
        {
          component: 'FOOTER_COMPONENT'
        }
      ]

    }

  });


angular.module('titannicGeneratorApp')
  .constant('ABOUT_PAGE', {

    'type': 'page',
    'id': 'ABOUT_PAGE',
    'document': '',
    'value': {

      pageStructure: [
        {
          component: 'NAVIGATION_COMPONENT'
        },
        {
          component: 'HEADER_COMPONENT'
        },
        {
          component: 'PEOPLE_COMPONENT'
        },
        {
          component: 'FOOTER_COMPONENT'
        }
      ]
    }

  });


/**
 * Components
 */


angular.module('titannicGeneratorApp')
  .constant('NAVIGATION_COMPONENT', {

    'type': 'component',
    'id': 'NAVIGATION_COMPONENT',
    'document': '',
    'value': {

      //jade/html component template and controller
      presentationTemplate: 'components/navbar/navbar.html',

      content: 'NAVIGATION_CONTENT',
      contentDocument: ''

    }

  });

angular.module('titannicGeneratorApp')
  .constant('HEADER_COMPONENT', {

    'type': 'component',
    'id': 'HEADER_COMPONENT',
    'document': '',
    'value': {

      presentationTemplate: 'components/header/header.html',

      content: 'HEADER_CONTENT',
      contentDocument: ''
    }

  });

angular.module('titannicGeneratorApp')
  .constant('PEOPLE_COMPONENT', {

    'type': 'component',
    'id': 'PEOPLE_COMPONENT',
    'document': '',
    'value': {
      presentationTemplate: 'components/people/people.html',

      content: 'PEOPLE_CONTENT',
      contentDocument: ''
    }

  });

angular.module('titannicGeneratorApp')
  .constant('INTRODUCTION_COMPONENT', {

    'type': 'component',
    'id': 'PEOPLE_COMPONENT',
    'document': '',
    'value': {
      presentationTemplate: 'components/introduction/introduction.html',

      content: 'INTRODUCTION_CONTENT',
      contentDocument: ''
    }

  });


angular.module('titannicGeneratorApp')
  .constant('FOOTER_COMPONENT', {

    'type': 'component',
    'id': 'FOOTER_COMPONENT',
    'document': '',
    'value': {
      presentationTemplate: 'components/footer/footer.html',

      content: 'FOOTER_CONTENT',
      contentDocument: ''
    }
  });




/**
 * Content
 */


angular.module('titannicGeneratorApp')
  .constant('NAVIGATION_CONTENT', {

    'type': 'navigationcontent',
    'id': 'NAVIGATION_CONTENT',
    'document': '',
    'value': {
      navigationBarLinks: [
        {
          'title': 'Home',
          'path': '/',
          'authentiated': false
        },
        {
          'title': 'About',
          'path': '/about',
          'authentiated': false
        }
      ]
    }

  });

angular.module('titannicGeneratorApp')
  .constant('HEADER_CONTENT', {


  });

angular.module('titannicGeneratorApp')
  .constant('PEOPLE_CONTENT', {});

angular.module('titannicGeneratorApp')
  .constant('INTRODUCTION_CONTENT', {});

angular.module('titannicGeneratorApp')
  .constant('FOOTER_CONTENT', {});
