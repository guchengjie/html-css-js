var app=angular.module('myApp', []);

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.users=[
		{name:"tom",age:20,pwd:"abc"},
		{name:"jack",age:24,pwd:"abc"},
		{name:"mike",age:19,pwd:"aaa"},
		{name:"Alice",age:22,pwd:"abc"},
		{name:"alex",age:18,pwd:"222"},
		{name:"ab",age:18,pwd:"333"},
	];

	//定义一个排序函数，返回一个整数
	$scope.compName=function (value) { //value表示数组中的每个元素
		// console.log(value);
		return value.name.length;
	};

	/**
	 * 定义一个排序函数
	 * 第一个参数比第二参数大时返回正数，表示升序，否则表示降序
	 */
	$scope.compName2=function (a,b) {
		// console.log("------------");	
		// console.log(a);
		// console.log(b);
		var al=a.value.length;
		var bl=b.value.length;
		//如果长度不同，则按name长度由短到长排序，升序
		if(al!=bl){
			return al-bl;
			// return bl-al;
		}
		//如果长度相同，则按name的字符由小到大排序，升序
		// return a.value.localeCompare(b.value); //localeCompare是String类型提供的一个方法，用来比较字符的大小
		var x=a.value.localeCompare(b.value);
		// console.log(x);
		// return x;
		if(x>0){
			return -6;
		}else if(x<0){
			return 666;
		}else{
			return 0;
		}

		
	};

}]);