var app=angular.module('myApp', []);

//方式1：注入指定的过滤器，命名规则：过滤器名+Filter
/*app.controller('FilterController', ['$scope','currencyFilter','numberFilter', function($scope,cf,nf){ //形参名可自定义
	$scope.price=cf(123.45678,'￥',4);
	$scope.num=nf(3.1415926,3);
}]);*/

//方式2：直接注入$filter服务
app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.price=$filter('currency')(666.45678,'￥',4); //先获取指定名称的过滤器，然后再执行
	$scope.num=$filter('number')(3.1415926,3);
}]);