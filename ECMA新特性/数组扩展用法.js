/**
 * @author: 飞越
 * @desc: 数组扩展用法
 * @date: 2020-10-08 18:03
 * @compatibility: 
 */

/**
 * 数组基础用法
 */
{
	console.group('数组基础用法');
	
	/* 创建数组 */
	console.group('创建数组');
		var fruits = ['Apple', 'Banana'];
		console.log("fruits.length: ",fruits.length);
	console.groupEnd();
	
	
	/* 通过索引访问数组 */
	console.group('通过索引访问数组');
		var first = fruits[0];
		console.log("first: ",first);
		var last = fruits[fruits.length-1];
		console.log("last: ",last);
	console.groupEnd();
	
	
	/* 遍历数组 */
	console.group('遍历数组');
		fruits.forEach((item, index, array) => {
			console.log("item: ",item);
			console.log("index: ",index);
		})
	console.groupEnd();
	
	/* 添加元素到数组的末尾 */
	console.group('添加元素到数组的末尾');
		var newlength = fruits.push('Orange');
		console.log("newlength: ",newlength);
	console.groupEnd();
	
	/* 删除数组末尾元素 */
	console.group('删除数组末尾元素');
		last = fruits.pop();
		console.log("last: ",last);
	console.groupEnd();
	
	/* 添加元素到数组的头部 */
	console.group('添加元素到数组的头部');
	newlength = fruits.unshift('Strawberry');
	console.log("newlength: ",newlength);
	console.groupEnd();
	
	/* 删除数组头部的元素 */
	console.group('删除数组头部的元素');
		first = fruits.shift();
		console.log("first: ",first);
	console.groupEnd();
	
	/* 找出某个元素在数组中的索引 */
	console.group('找出某个元素在数组中的索引');
		var pos = fruits.indexOf('Banana');
		console.log("pos: ",pos);
	console.groupEnd();
	
	/* 通过索引删除某个元素 */
	console.group('通过索引删除某个元素');
		var removeItem = fruits.splice(pos, 1);
		console.log("removeItem: ",removeItem);
	console.groupEnd();
	
	/* 从索引位置删除多个元素 */
	console.group('从索引位置删除多个元素');
		var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
		pos = 1;
		var len = 2;
		removeItem = vegetables.splice(pos, len);
		console.log("removeItem: ",removeItem);
	console.groupEnd();
	
	/* 赋值一个数组 */
	console.group('赋值一个数组');
		var shallowCopy = fruits.slice();
		console.log("shallowCopy: ",shallowCopy);
	console.groupEnd();
	
	console.groupEnd();
}


/**
 * 构造属性和构造方法
 */
{
	console.group('构造属性和构造方法');
	
	/**
	 * Array.length
	 * 数组的length是一个32bit无符号整数
	 */
	console.group('Array.length');
		console.log(": ",);
	console.groupEnd();
	
	/**
	 * Array.from()
	 * 从一个类似数组或可迭代对象创建一个新的,浅拷贝的数组实例
	 * @param array 转换为数组的伪数组或可迭代对象
	 * @param mapFn 新数组中每个元素执行的回调函数
	 * @param thisArg 调用mapFn使用的this对象
	 * @return 返回一个新的数组实例
	 * @compatibility 不支持IE
	 */
	console.group('Array.from()');
		console.log("Array.from('foo'): ",Array.from('foo'));
		console.log("Array.from([1, 2, 3], x=>x+x): ",Array.from([1, 2, 3], x=>x+x));
	console.groupEnd();
	
	/**
	 * Array.isArray()
	 * 确定传递的值是否是一个数组对象
	 */
	console.group('Array.isArray()');
		console.log("Array.isArray([]): ",Array.isArray([]));
		console.log("Array.isArray([1]): ",Array.isArray([1]));
		console.log("Array.isArray(new Array()): ",Array.isArray(new Array()));
		console.log("Array.isArray(new Array('a', 'b', 'c', 'd')): ",Array.isArray(new Array('a', 'b', 'c', 'd')));
		// Array.prototype是一个数组
		console.log("Array.isArray(Array.prototype): ",Array.isArray(Array.prototype));
		
		console.log("Array.isArray(): ",Array.isArray());
		console.log("Array.isArray({}): ",Array.isArray({}));
		console.log("Array.isArray(null): ",Array.isArray(null));
		console.log("Array.isArray(undefined): ",Array.isArray(undefined));
		console.log("Array.isArray(17): ",Array.isArray(17));
		console.log("Array.isArray('Array'): ",Array.isArray('Array'));
		console.log("Array.isArray(true): ",Array.isArray(true));
		console.log("Array.isArray(false): ",Array.isArray(false));
		console.log("Array.isArray(new Uint8Array(32)): ",Array.isArray(new Uint8Array(32)));
		console.log("Array.isArray({ __proto__: Array.prototype }): ",Array.isArray({ __proto__: Array.prototype }));
	console.groupEnd();
	
	/**
	 * Array.of()
	 * 根据一组参数来创建新的数组实例
	 * @params 任意个参数
	 * @return 新的数组实例
	 */
	console.group('Array.of()');
		console.log("Array.of(7): ",Array.of(7));
		console.log("Array.of(...[1,2,3], 4, 5): ",Array.of(...[1,2,3],4,5));
	console.groupEnd();
	
	console.groupEnd();
	
}

/**
 * 数组实例属性和方法
 */
{
	/* 数组实例属性 */
	console.group('数组实例属性');
		
		/**
		 * Array.prototype.constructor
		 * 所有数组实例都继承的属性
		 */
		console.group('Array.prototype.constructor');
			var arr = [];
			console.log("arr.__proto__.constructor: ",arr.__proto__.constructor);
		console.groupEnd();
		
		
		/**
		 * Array.prototype.length
		 * 因为Array.prototype也是个数组,所以它有length属性,这个值为零,因为是个空数组
		 */
		console.group('Array.prototype.length');
			
		console.groupEnd();
		
	console.groupEnd();
	
	/* 数组实例访问方法 */
	// 以下方法不会改变调用它们的对象的值,只会返回一个新数组或者期望值
	console.group('数组实例访问方法');
	
		/**
		 * Array.prototype.concat()
		 * @description 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
		 * @param 数组或值
		 * @return 合并后的新数组
		 */
		console.group('Array.prototype.concat()');
			var alpha = ['a', 'b', 'c'];
			var numeric = [1, 2, 3];
			console.log("alpha.concat(numeric, 4, 5): ",alpha.concat(numeric, 4, 5));
		console.groupEnd();
		
		/**
		 * Array.prototype.concat()
		 */
		console.group('访问方法');
		
		console.groupEnd();
		
	
	console.groupEnd();
	
}
