# 死记硬背
- 函数体中,非显示或隐式的简单调用函数时.（在执行函数时不考虑显示绑定,如果函数被上一级的对象所调用,那么this指向就是上一级的对象,否则指向全局环境）
	* 在严格模式下,函数内的this会被绑定到undefined上.
	* 在非严格模式下,则会被绑定到全局对象window/global上.
- 一般使用new方法调用构造函数时,构造函数内的this会被绑定到新创建的对象上.
- 一般通过call/apply/bind方法显示调用函数时,函数体内的this会被绑定到指定参数的对象.
- 一般通过上下文对象调用函数时,函数体内的this会被绑定到该对象上.
- 在箭头函数中,this的指向是由外层作用域决定的
