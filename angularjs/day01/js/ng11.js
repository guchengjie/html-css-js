angular.module('myApp',[]).controller('ExprController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.age=20;

	$scope.stu={
		id:1001,
		name:'张三'
	};

	$scope.hobbies=['eat','sleep','doudou'];
}])
