/**
 * @author: feiyue
 * @desc: promise异步编程
 * @date: 2020-11-22 14:11
 * @version: 1.0.0
 */
const getName = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("nodejs");
	}, 50);
})

const getNumber = Promise.resolve(1);
const getError = Promise.reject("出错拉～");

getError.catch(console.log);

Promise.all([getName, getName])
	.then(console.log)
	.catch(console.log);
	
Promise.race([getName, getName])
	.then(console.log)
	.catch(console.log);
	
getName
	.then(name => {
		console.log(name);
		return 20;
	})
	.then(number => {
		console.log(number);
	})