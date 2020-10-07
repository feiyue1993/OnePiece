/**
 * @author: 飞越
 * @desc: 模板字符串api练习
 * @date: 2020-10-07 13:30
 * @compatibility: 不兼容IE
 */

/* 多行字符串 */
console.group('多行字符串');
console.log(`line1
line2
line3`);
console.groupEnd();

/* 插入表达式 */
console.group('插入表达式');
let a = 1;
let b = 2;
console.log(`${a}+${b}=${a+b}`);
console.groupEnd();

/**
 * 嵌套模板
 * 注意变量的复制要在字符串模板之前才有效
 */
console.group('嵌套模板');
let canExpend1 = true;
let canExpend2 = true;
let classes = `header ${canExpend1? `${canExpend2? '1': '2'}`: '3'}`;
console.log(classes);

canExpend1 = true;
canExpend2 = false;
classes = `header ${canExpend1? `${canExpend2? '1': '2'}`: '3'}`;
console.log(classes);

canExpend1 = false;
canExpend2 = false;
classes = `header ${canExpend1? `${canExpend2? '1': '2'}`: '3'}`;
console.log(classes);

console.groupEnd();

/* 带标签的模板字符串 */
function tagTest(param1, param2, param3){
	console.log("param1: ",param1);
	console.log("param2: ",param2);
	console.log("param3: ",param3);
	return function(){
		return param2 + param3
	}
}
console.group('带标签的模板字符串');
let c = 3;
let d = 4;

var func1 = tagTest`test ${c} ${d}`;
console.log('func1:', func1());

c = 5;
d = 6;
var func2 = tagTest`test ${c} ${d}`;
console.log('func2:', func2());
console.groupEnd();

/**
 * 原始字符串(不会解释转义字符)
 * 特殊属性raw: 用于访问原始字符串
 */
function tag(strings){
	console.log(strings.raw[0]);
}
console.group('原始字符串');
let e = 10;
tag`string text line 1 \n string text line 2`;
console.log(`string text line 1 \n string text line 2`);
console.groupEnd();