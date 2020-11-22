/**
 * 事件本质发布订阅模式
 */
class Evente {

	constructor() {
		// 缓存事件
		this.map = {};
	}

	add(name, fn) {
		if (this.map[name]) {
			this.map[name].push(fn);
			return this;
		}

		this.map[name] = [fn];
		return this;
	}

	emit(name, ...args) {
		this.map[name].forEach(fn => {
			fn(...args);
		});
		return this;
	}

}

let e = new Evente();
e
	.add("hello", (err, name) => {
		if (err) {
			console.log(err);
			return;
		}

		console.log(name);
	})

	.emit("hello", null, "hello Elicks")


// 事件加入异步编程
const fs = require('fs');
function readFn(err, data){
	console.log(data.toString());
}
fs.readFile("mock.txt", readFn);

let e2 = new Evente();
e2.add("readFn", readFn);
fs.readFile("mock.txt", (err, data) => {
	e2.emit("readFn", err, data);
})