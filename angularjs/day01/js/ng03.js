/**
 * v1.3及之后的版本不支持全局控制器，使用模块Module封装控制器Controller
 * 即必须先定义模块，然后在模块中定义控制器
 */

/**
 * 定义一个模块
 * 第一个参数表示模块名，用于ng-app指令
 * 第二个参数表示要注入的内容，指定依赖模块，是一个数组
 */

var app=angular.module('myApp',[]);

/**
 * 在模块中定义一个控制器
 * 第一个参数表示控制器名，用于ng-controller指令
 * 第二个参数有两种写法：
 * 	方式1：直接传递一个回调函数
 * 	方式2：可以传递一个数组，包含两个元素
 * 		第一个元素表示要注入的参数
 * 		第二个元素表示一个回调函数
 */
//方式1
// app.controller('MyController',function($scope){
// 	$scope.name='jack';
// });

//js压缩混淆后会将形参名改为a、b...，导致作用域参数无效
// app.controller('MyController',function(a){
// 	a.name='jack';
// });

//方式2
app.controller('MyController',['$scope',function(a){ //仍然建议形参使用$scope
	a.name='汤姆';
}]);





