# vue

## 深入组件
### 组件注册
- 全局注册
```
	const app = Vue.createApp({});
	app.component('my-component-a', {});
	app.component('my-component-b', {});
	app.component('my-component-c', {});
	app.mount('#app');
```
	* kebab-case(html必须使用一样的名称)
	* PascalCase(html可以使用kebab-case和PascalCase两种写法)

- 局部注册
```
	const componentA = {};
	const componentB = {};
	const componentC = {};
	const app = Vue.createApp({
		components: {
			'component-a': componentA,
			'component-b': componentB,
			'component-c': componentC,
		}
	});
```

### props
- 类型
	* String
	* Number
	* Boolean
	* Array
	* Object
	* Function
	* Promise

- 传递静态或动态的prop
	* 传入静态值
	```
	<blog-post title="static">
	</blog-post>
	```
	* 传入动态值
	```
	<blog-post :title="post.dynamic">
	</blog-post>
	```
	* 传入一个对象所有的prop
	```
	const post = {
		id: 1,
		title: 'My Journey with Vue'
	}

	<blog-post :="post">
	</blog-post>
	等价于
	<blog-post 
		:id="post.id"
		:title="post.title">
	</blog-post>
	```

- 单向数据流
* 父组件的更新会向下流动到子组件中,反过来则不行.(防止子组件意外变更父组件的状态)
* 每次父组件发生变更,子组件中的所有prop都会刷新为最新的值。(不能在子组件中改变prop)
* 对象和数组是通过引用传入的,所以子组件变更对象和数组会影响到父组件.

- prop验证
	* 在一个示例创建之前进行验证。
	* data、computed在default或validator函数中是不可用的。
	* 检查类型
		+ String
		+ Number
		+ Boolean
		+ Array
		+ Object
		+ Date
		+ Function
		+ Symbol
		+ 自定义构造函数

- props的大小写命名
		+ html attribute大小写不敏感,尽量使用kebab-case命名

### 非prop的attribute
- attribute继承
	* 当组件返回单个根节点时,非prop attribute将自动添加到根节点的attribute中
	* 同样适用于事件监听器

- 禁用attribute继承(使用场景,将非prop attribute应用于跟组件之外的元素)
	* 组件选项中设置inheritAttrs: false

- 多个根节点上的attribute继承
	* 多个根节点未显示绑定attrs会发出警告

### 自定义事件
- 事件名
	* 时间名不存在任何自动化的大小写转换,需要完全匹配名称,推荐始终使用kebab-case命名

- 定义自定义事件(emits)
	* 在组件中定义了原生事件后,原生事件会被替代
	* 可以使用数组语法或者对象语法定义,与props类似

- 验证抛出的事件
	* 验证函数接收事件接收的参数,返回一个boolean值指示是否有效

- v-model参数
	* 默认情况下,v-model使用modelValue作为prop和update:modelValue作为事件,可以通过想v-model传递参数来改变这些名称

- 多个model绑定
	* v-model:propsName相当于props: ['propsName'],emit('update:propsName')

- 处理v-model修饰符
	* vue2,v-model上的修饰符提供硬编码支持
	* vue,v-model上的修饰符通过modelModifiers props提供给组件
	* 内置修饰符号
		+ .trim
		+ .number
		+ .lazy
	* 自定义修饰符
	