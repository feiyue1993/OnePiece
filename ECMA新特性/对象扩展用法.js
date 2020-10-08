/**
 * @author: 飞越
 * @desc: 对象扩展用法
 * @date: 2020-10-07 20:20
 * @compatibility: 
 */

/**
 * Object API
 */

/**
 * Object.assign
 * @params ...sources 需要赋值的多个源对象
 * @reture 目标对象
 */
{
	const obj = {a : 1};
	const copy = Object.assign({}, obj);
	console.group('Object.assign');
	console.log("copy: ",copy);
	console.log("obj===copy: ",obj===copy);
	console.groupEnd();
}