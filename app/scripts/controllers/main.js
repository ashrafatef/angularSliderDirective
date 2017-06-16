'use strict';

/**
 * @ngdoc function
 * @name sliderAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliderAngularApp
 */
 var descriptionContent = 'tmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmam'+
                          'tmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamt'+
                          'mamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmam'+
                          'tmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmamtmam';

 function MainCtrl($scope) {
   $scope.sliderData = [
         {
           Id : 1 ,
          title : 'company Name',
          description :descriptionContent ,
          imageSrc : '../../images/spacex.png'
        },
        {
          Id : 2 ,
         title : 'company Name',
         description :descriptionContent ,
         imageSrc : '../../images/yeoman.png'
       },
       {
         Id : 3 ,
        title : 'company Name',
        description :descriptionContent ,
        imageSrc : '../../images/spacex.png'
      },
      {
        Id : 4 ,
       title : 'company Name',
       description :descriptionContent ,
       imageSrc : '../../images/yeoman.png'
      },
       {
         Id : 5 ,
        title : 'company Name',
        description :descriptionContent ,
        imageSrc : '../../images/spacex.png'
      },
      {
        Id : 6 ,
       title : 'company Name',
       description :descriptionContent ,
       imageSrc : '../../images/yeoman.png'
     },
     {
       Id : 7 ,
      title : 'company Name',
      description :descriptionContent ,
      imageSrc : '../../images/spacex.png'
    },
    {
      Id : 8 ,
     title : 'company Name',
     description :descriptionContent ,
     imageSrc : '../../images/yeoman.png'
    },
  ];
 }
 MainCtrl.$inject = ['$scope'];
angular
  .module('sliderAngularApp')
  .controller('MainCtrl', MainCtrl);
