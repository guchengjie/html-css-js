angular.module('myApp',[])
.controller('ParseController', ['$scope','$parse',function($scope,$parse){
	$scope.txt=666;

	$scope.$watch('txt',function (newValue,oldValue,scope) {
		// console.log('原值：'+oldValue);
		// console.log('新值：'+newValue);
		// console.log(scope);
		// console.log(scope===$scope);
		
		try{
			//$parse函数用来将表达式解析为函数
			var fn=$parse(newValue); //如果解析成功则返回一个函数
			$scope.result=fn(scope);
		}catch(e){

		}
	});
}]);

/**
 * 手动解析表达式的步骤：
 * 1.为控制器注入$parse
 * 2.使用$watch监控数据的变化
 * 3.使用$parse将表达式解析为函数
 * 4.调用该函数，返回表达式解析的结果
 */
