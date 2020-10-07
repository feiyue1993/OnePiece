/**
 * @author: 飞越
 * @desc: 剩余参数
 * @date: 2020-10-07 19:35
 * @compatibility: 不支持IE
 */

/**
 * 剩余参数和arguments对象的区别
 * - 剩余参数包含那些没有对应实参的参数,arguments对应所有参数
 * - 剩余参数时一个Array实例,arguments不是,还包含一些附加属性
 */

/* 从arguments到数组 */

/* 解构剩余参数 */
{
	function func(...[a, b, c]){
		return a + b + c;
	}
	
	console.group('解构剩余参数');
	console.log("func(1): ",func(1));
	console.log("func(1, 2, 3): ",func(1, 2, 3));
	console.log("func(1, 2, 3, 4): ",func(1, 2, 3, 4));
	console.groupEnd();
}