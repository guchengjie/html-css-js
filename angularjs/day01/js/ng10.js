angular.module('myApp',[]).controller('EventController', ['$scope', function($scope){
	$scope.count=0;

	$scope.doAdd=function () {
		// $scope.count++;
		this.count++;
	};

	//自定义事件并绑定事件回调函数
	$scope.$on('MyClick',function () {
		// $scope.count++;
		// this.count++; //此处this表示Window，不是$scope
		console.log(this);
		console.log(this===$scope);
	});
}])
