/**
 * 异步基础
 */
// 同步
const fs = require("fs");
let data1 = fs.readFileSync("./mock.txt");
console.log("data1.toString(): " + data1.toString());
// 异步
let data2 = fs.readFile("./mock.txt", (err, data3)=>{
	console.log("data3 +++");
	console.log("data3.toString(): " + data3.toString());
})
console.log("data2: " + data2);

// 模拟异步任务
function my_async_function(name, fn){
	setTimeout(()=>{
		fn(null, "-" + "name" + "-");
	}, 3000);
}

my_async_function("hello", (err, name)=>{
	if(err){
		console.error(err);
	}
	console.log(name)
})