'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$urlRouterProvider', '$mdThemingProvider', function($locationProvider, $urlRouterProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
  $urlRouterProvider.otherwise('/view1')

  var darkRed = {
  	'50': '#c7384e',
        '100': '#b43246',
        '200': '#a02d3e',
        '300': '#8c2737',
        '400': '#78222f',
        '500': '#641C27',
        '600': '#50161f',
        '700': '#3c1117',
        '800': '#280b10',
        '900': '#140608',
        'A100': '#cd4c60',
        'A200': '#d26071',
        'A400': '#d87483',
        'A700': '#000000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
    'contrastLightColors': undefined

  }
  var lightRed = {
  	'50': '#682a2e',
        '100': '#7a3236',
        '200': '#8c393f',
        '300': '#9e4047',
        '400': '#b0484f',
        '500': '#bb575e',
        '600': '#c97b80',
        '700': '#d18d92',
        '800': '#d89fa3',
        '900': '#dfb1b5',
        'A100': '#c97b80',
        'A200': '#C2696F',
        'A400': '#bb575e',
        'A700': '#e7c4c6',
    'contrastDefaultColor': 'dark',
    'contrastDarkColors': undefined,
    'contrastLightColors': ['50', '100', '200', '300', '400', 'A100']
  }

  $mdThemingProvider.definePalette('darkRed', darkRed)
  $mdThemingProvider.definePalette('lightRed', lightRed)
  $mdThemingProvider.theme('default')
  	.primaryPalette('darkRed', {
  		'default': '500',
  		'hue-1': '100',
  		'hue-2': '600',
  		'hue-3': 'A100'
  	})
  	.accentPalette('lightRed', {
  		'default': '500',
  		'hue-1': '100',
  		'hue-2': '600',
  		'hue-3': 'A100'
  	})
}]);

