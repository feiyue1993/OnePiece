/**
 * @author: 飞越
 * @desc: 对象解构
 * @date: 2020-10-07
 * @compatibility: 不支持IE
 */

/* 基本赋值 */
{
	let o = {p: 1, q: 2};
	let {p, q} = o;
	console.group('基本赋值');
	console.log("p: ",p);
	console.log("q: ",q);
	console.groupEnd();
}

/* 无声明赋值 */
{
	let a, b;
	// 必须使用圆括号,不使用会被认为是一个块,而不是对象字面量
	({a, b} = {a: 3, b: 4});
	console.group('无声明赋值');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 给新的变量名赋值 */
{
	let o = {a: 5, b: 6};
	let {a: a1, b: b1} = o;
	console.group('给新的变量名赋值');
	console.log("a1: ",a1);
	console.log("b1: ",b1);
	console.groupEnd();
}

/* 默认值 */
{
	let {a = 7, b = 8} = {a: 3};
	console.group('默认值');
	console.log("a: ",a);
	console.log("b: ",b);
	console.groupEnd();
}

/* 给新的变量命名并提供默认值 */
{
	let {a: aa = 7, b: bb = 8} = {a: 3};
	console.group('给新的变量命名并提供默认值');
	console.log("aa: ",aa);
	console.log("bb: ",bb);
	console.groupEnd();
}

/* 函数参数默认值 */
{
	console.group('函数参数默认值');
	
	/* ES5版本 */
	function drawES5Chart(options){
		options = options === undefined ? {} : options;
		var size = options.size === undefined ? 'big' : options.size;
		var cords = options.cords === undefined ? {x: 0, y: 0} : options.cords;
		var radius = options.radius === undefined ? 25 : options.radius;
		console.log(size, cords, radius);
	}
	drawES5Chart({
	  cords: { x: 18, y: 30 },
	  radius: 30
	});
	
	/* ES6版本 */
	function drawES6Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25}){
		console.log(size, cords, radius);
	}
	drawES6Chart({
	  cords: { x: 18, y: 30 },
	  radius: 30
	});
	
	console.groupEnd();
}


/* 解构嵌套对象 */
{
	const metadata = {
	  title: 'Scratchpad',
	  translations: [
	    {
	      locale: 'de',
	      localization_tags: [],
	      last_edit: '2014-04-14T08:43:37',
	      url: '/de/docs/Tools/Scratchpad',
	      title: 'JavaScript-Umgebung'
	    }
	  ],
	  url: '/en-US/docs/Tools/Scratchpad'
	};
	
	let {
		title: englishTitle,
		translations: [
			{
				title: localeTitle
			}
		]
	} = metadata;
	
	console.group('解构嵌套对象');
	console.log("englishTitle: ",englishTitle);
	console.log("localeTitle: ",localeTitle);
	console.groupEnd();
}

/* for...of 迭代和解构 */
{
	var people = [
	  {
	    name: 'Mike Smith',
	    family: {
	      mother: 'Jane Smith',
	      father: 'Harry Smith',
	      sister: 'Samantha Smith'
	    },
	    age: 35
	  },
	  {
	    name: 'Tom Jones',
	    family: {
	      mother: 'Norah Jones',
	      father: 'Richard Jones',
	      brother: 'Howard Jones'
	    },
	    age: 25
	  }
	];

	console.group('for...of 迭代和解构');
	for(let {name: n, family: { father: f}} of people){
		console.log("n: ",n);
		console.log("f: ",f);
	}
	console.groupEnd();
}

/* 从作为函数实参的对象中提取数据 */
{
	function userId({id}){
		console.log("id: ",id);
	}
	
	function whois({displayName: displayName, fullName: {firstName: name}}){
		console.log(displayName + " is " + name);
	}
	
	var user = { 
	  id: 42, 
	  displayName: "jdoe",
	  fullName: { 
	      firstName: "John",
	      lastName: "Doe"
	  }
	};
	
	console.group('从作为函数实参的对象中提取数据');
	userId(user);
	whois(user);
	console.groupEnd();
}

/* 对象属性计算名和解构 */
{
	let key = 'z';
	let { [key]: foo} = { z: "bar"};
	console.group('对象属性计算名和解构');
	console.log("foo: ",foo);
	console.groupEnd();
}

/* 对象解构中的rest */
{
	let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
	console.group('对象解构中的rest');
	console.log("a: ",a);
	console.log("b: ",b);
	console.log("rest: ",rest);
	console.groupEnd();
}

/* 无效的javascript标识符作为属性名称(通过提供有效的替代标识符，解构可以与不是有效的JavaScript标识符的属性名称一起使用。) */
{
	const foo = {"fizz-buzz": true};
	const {'fizz-buzz': fizzBuzz} = foo;
	console.group('无效的javascript标识符作为属性名称');
	console.log("fizzBuzz: ",fizzBuzz);
	console.groupEnd();
}

/* 解构对象时会查找原型链(如果属性不在对象自身,将从原型链中查找) */
{
	var obj = {self: '123'};
	obj.__proto__.prot = '456';
	const {self, prot} = obj;
	console.group('解构对象时会查找原型链');
	console.log("self: ",self);
	console.log("prot: ",prot);
	console.groupEnd();
}