'use strict';

/**
 * @ngdoc directive
 * @name sliderAngularApp.directive:saSliderAngular
 * @description
 * # saSliderAngular
 */
angular.module('sliderAngularApp')
  .directive('saSliderAngular', function () {
    return {
      templateUrl: '../views/sasliderangular.html',
      restrict: 'E',
      scope:{
        sliderData : '=',
        numberVisible : '='
      },
      controller : function($scope){
        $scope.start = 0 ;
        $scope.end = $scope.numberVisible;
        $scope.data = $scope.sliderData;
      },
      link: function postLink(scope) {


        //scope.prepareData (scope.data ,scope.numberVisible);
        scope.move = function(direction) {
          if (direction === 'left') {
            scope.start --;
            scope.end --;
            angular.element( document.querySelector( '#item'+scope.start )).removeClass('move-left');
          }else if (direction === 'right') {
            angular.element( document.querySelector( '#item'+scope.start )).addClass('move-left');
            scope.start ++;
            scope.end ++;

          }
        };
      }
    };
  });
