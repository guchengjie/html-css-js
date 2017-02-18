var app=angular.module('myApp', []);

//$timeout是AngularJS对原生JavaScript中window.setTimeout的封装
app.controller('DirectiveController', ['$scope','$timeout', function($scope,$timeout){
	$timeout(function () {
		$scope.url='http://www.baidu.com';
		$scope.gulp='images/2.png';
	},5000);

	$scope.isReadOnly=true;
	$scope.doReadOnly=function () {
		$scope.isReadOnly=!$scope.isReadOnly;
	};

	$scope.cls='red';
	$scope.doClass=function () {
		if($scope.cls=='red'){
			$scope.cls='blue';
		}else{
			$scope.cls='red';
		}
	};

	$scope.style={
		'background-color':'#ccc',
		'font-size':'30px',
		color:'red'
	};
	$scope.doStyle=function(){
		$scope.style={'background-color':'pink'};
	};

}])