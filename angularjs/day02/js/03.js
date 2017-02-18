var app=angular.module('myApp', []);

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.str=$filter('limitTo')($filter('uppercase')('Hello World'),2);

	//作用类似于JSON.stringify()
	var person={id:1001,name:'alice',sex:'male'};
	var str=$filter('json')(person);
	console.log(str);
	console.log(typeof str);
}]);