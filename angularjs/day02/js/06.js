var app=angular.module('myApp', []);

/**
 * 自定义过滤器，使用模块的filter服务创建，与控制器同级
 * 语法：模块对象.filter('过滤器名称',回调函数);
 * 		其中回调函数返回一个函数定义，该函数的第一个函数表示要过滤的数据
 * 		第二个及其他的参数表示过滤器需要的参数，可选
 * 		该函数的返回值即为过滤后的数据
 */
app.filter('reverse',function () {
	//实现1：将字符串反转
	/*return function (data) {
		var arr=data.split('');
		arr.reverse();
		return arr.join('');
	};*/

	//实现2：将字符串反转，可以指定分隔符
	/*return function (data,splitChar) {
		if(!splitChar){ //如果未指定，则设置为空字符串
			splitChar='';
		}
		var arr=data.split(splitChar);
		arr.reverse();
		return arr.join(splitChar);
	};*/

	//实现3：将字符串、数值、数组反转
	return function (data,splitChar) {
		if(typeof data==='string'){
			if(!splitChar){ //如果未指定，则设置为空字符串
				splitChar='';
			}
			var arr=data.split(splitChar);
			arr.reverse();
			return arr.join(splitChar);
		}
		if(typeof data==='number'){
			var arr=(data+'').split('');
			arr.reverse();
			return parseFloat(arr.join(''));
		}
		// if(data.constructor.name==='Array'){
		if(angular.isArray(data)){  //调用angular的isArray()方法，判断是不是数组
			// return data.reverse();
			 
			//如果操作的是作用域中的数组，由于每次处理都会引起作用域中数据变化，所以会报错，可将原数组拷贝到临时数组中再操作
			var temp=new Array();
			for(var index in data){
				temp.push(data[index]);
			}
			return temp.reverse();
		}
		return data;//如果是其他数据，则直接返回
	};

});

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.str=$filter('reverse')('wbs16092');

	$scope.hobbies=['eat','sleep','doudou'];
}]);