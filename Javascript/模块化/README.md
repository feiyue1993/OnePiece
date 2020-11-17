# ESM模块化

## export

### 写法
```
1.	let name1, name2, name3, name4; // 需要预先定义的变量才能导出
	export {name1, name2, name3, name4};
	export {name1 as var1, name2, name3, name4}

2.	export let name1, name2, name3, name4; // 预先定义变量不能写成name1, name2, name3, name4的形式
	export let name1 = 'name1', name2 = 'name2', name3 = 'name3', name4 = 'name4';
	
3.	export default expression // 导出表达式
	export default function(){} // 导出匿名函数
	export default function functionName(){} // 导出函数
	export default class className{} // 导出类
	export default function* (){} // 导出生成器

4.  export {name as default, ...};
	export * from ...;
	export {name1, name2, ..., nameN} from ...;
	export {import1 as name1, import as name2, .., nameN} from ...;

总结:
- 两种导出形式,named与default,name是将导出变量赋值到一个{}上进行导出, default是将导出对象绑定到一个default对象上.
- 一切能以变量的形式表示的变量都能导出
- export可以设置多个,import只能设置一个
```

## import

### 写法
```
1. import defaultExport from 'export';

2. import * as name from 'export'; // 将export中的所有模块都导出,并使用变量别名name存储

3. import {export} from 'export'; // 与对象结构类似,将export中的export变量赋给当前的export变量
   import {export as alias} from 'export';
   import {export1, export2} from 'export';

4. import defaultExport,{export1, export2 as alias2} from 'export';
   import defaultExport,* as all from 'export';

5. import 'export'; // 运行模块中的全局代码

6. 动态import();

总结:
- import导入的模块是静态的,会使所有被导入的模块,在加载时被编译;
```