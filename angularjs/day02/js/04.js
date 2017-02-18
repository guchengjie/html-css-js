var app=angular.module('myApp', []);

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.arr=["tom","jack","mike","Alice","alex"];

	$scope.users=[
		{name:"tom",age:20,pwd:"123"},
		{name:"jack",age:24,pwd:"abc"},
		{name:"mike",age:19,pwd:"aaa"},
		{name:"Alice",age:22,pwd:"111"},
		{name:"alex",age:18,pwd:"222"},
	];

	//定义一个筛选函数，返回true表示可出现在新数组中
	$scope.comp=function (value,index,arr) { //value表示数组中每个元素值，index表示索引，arr表示数组本身
		return value.length==4;	 
	};

	$scope.comp2=function (value,index,arr) { 
		 // console.log(value);
		 return value.age>20;
	};

	$scope.comp3=function (value,index,arr) { 
		 return value.age>$scope.age;
	};
}]);