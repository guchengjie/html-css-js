var app=angular.module('myApp', []);

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.now=new Date();

}]);