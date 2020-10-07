/**
 * @author: 飞越
 * @desc: 数组解构
 * @date: 2020-10-07
 * @compatibility: 不支持IE
 */

/* 变量声明并赋值时的解构 */
{
	let foo = ['one', 'two', 'three'];
	let [one, two, three] = foo;
	console.group('变量声明并赋值时的解构');
	console.log("one: ",one);
	console.log("two: ",two);
	console.log("three: ",three);
	console.groupEnd();
}

/* 变量先声明后赋值时的解构 */
{
	let a, b;
	[a, b] = [1, 2];
	console.group('变量先声明后赋值时的解构');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 默认值 */
{
	let a, b;
	[a=5, b=7] = [1];
	console.group('默认值');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 交换变量 */
{
	let a = 1;
	let b = 2;
	[a, b] = [b, a];
	console.group('交换变量');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 解析一个从函数返回的数组 */
{
	function func(){
		return [1, 2];
	}
	
	let [a, b] = func();
	console.group('解析一个从函数返回的数组');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 忽略某些返回值 */
{
	function func(){
		return [1, 2, 3];
	}
	let [a,,b] = func();
	console.group('忽略某些返回值');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 将剩余的数组赋值给一个变量 */
{
	var [a, ...b] = [1, 2, 3];
	console.group('将剩余的数组赋值给一个变量');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 用正则表达式匹配提取值 */
{
	function parseProtocol(url) { 
	  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
	  if (!parsedURL) {
	    return false;
	  }
	
	  var [, protocol, fullhost, fullpath] = parsedURL;
	  return protocol;
	}
	
	console.group('用正则表达式匹配提取值');
	console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'));
	console.groupEnd();
}