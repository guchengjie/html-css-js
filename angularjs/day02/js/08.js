var app=angular.module('myApp', []);

app.controller('DirectiveController', ['$scope', function($scope){
	$scope.flag=true;
	$scope.doChange=function(){
		$scope.flag=!$scope.flag;
	};

	// $scope.level='A';
}])