//定义插件的形式

//1.以工具函数的形式，调用：$.函数名()
(function($){
	$.extend({
		global:function(){
			console.log("以工具函数的形式定义的插件！");
		}
	});
})(jQuery);

//2.以成员函数的形式，调用：jQuery对象.函数名()
(function($){
	$.fn.extend({
		local:function(){
			console.log("以成员函数的形式定义的插件！");
			return this; //为了支持链式操作，需要返回当前对象this，此处的this表示调用local()方法的jQuery对象	
		}
	});
})(jQuery);