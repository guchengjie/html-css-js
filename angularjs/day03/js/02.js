var app=angular.module('myApp',[]);

app.controller('DirectiveController', ['$scope', function($scope){
	// $scope.s1='jack';

	$scope.arr=["tom","jack","mike","alice","alex"];
	
	$scope.users=[
		{id:1003,name:"tom",age:20,pwd:"123",sex:"male",height:180.5},
		{id:1007,name:"jack",age:18,pwd:"123",sex:"male",height:170.5},
		{id:1013,name:"mike",age:22,pwd:"444",sex:"female",height:164.5},
		{id:1009,name:"alice",age:29,pwd:"111",sex:"male",height:180.5},
		{id:1001,name:"lucy",age:19,pwd:"121113",sex:"female",height:150.5}
	];
}])