window.onload=function () {
	document.getElementById('btn').onclick=function () {
		console.log(this); //this表示事件源
	};
};


angular.module('myApp',[]).controller('EventController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.show=function (e) {
		// console.log(this);
		// console.log(this===$scope); //this表示当前作用域对象，嫁鸡随鸡 $scope，不再表示事件源
		// console.log($scope.name);	
		// console.log(this.name);
		
		// console.log(e);
		/*console.log(e.target); //事件源
		console.log(e.target.innerHTML);*/

		// console.log($(e.target).html()); //AngularJS虽然内置jqLite，但没有暴露出来，不能直接使用
		//将DOM对象转换jQuery对象
		// console.log(angular.element(e.target).html());
		var obj=angular.element(e.target);
		console.log(obj.html()); //调用jQuery中的方法
		obj.css('color','red');
		console.log(obj[0].innerHTML);

		//AngularJS也可以结合jQuery一起使用，需要引入jQuery库
		console.log($(e.target).css('background','pink'));
	};
}])

