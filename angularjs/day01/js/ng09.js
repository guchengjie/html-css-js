
var app=angular.module('myApp',[]);

app.controller('CalcController', ['$scope', function($scope){
	/*$scope.calc=function (e) {
		switch (e.target.value) {
			case '加':
				$scope.result=$scope.num1*1+$scope.num2*1;
				break;
			case '减':
				$scope.result=this.num1-this.num2;
				break;
			case '乘':
				$scope.result=$scope.num1*$scope.num2;
				break;
			case '除':
				$scope.result=$scope.num1/$scope.num2;
				break;			
		}
	};*/

	$scope.calc=function () {
		console.log($scope.flag);
		switch ($scope.flag) {
			case '加':
				$scope.result=$scope.num1*1+$scope.num2*1;
				break;
			case '减':
				$scope.result=this.num1-this.num2;
				break;
			case '乘':
				$scope.result=$scope.num1*$scope.num2;
				break;
			case '除':
				$scope.result=$scope.num1/$scope.num2;
				break;			
		}
	};
}]);


