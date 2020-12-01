function f1(){
	console.log("this: ",this);
}

function f2(){
	'use strict';
	console.log("this: ",this);
}

f1();
f2();