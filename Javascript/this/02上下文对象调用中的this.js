const o1 = {
	text: 'o1',
	fn: function(){
		return this.text;
	}
}

const o3 = {
	text: 'o3',
	fn: function(){
		var fn = o1.fn
		console.log("fn: ",this);
		return fn();
	}
}

console.log("o3.fn(): ",o3.fn());