{
	function* generator(i){
		yield i;
		return true;
		yield i + 10;
	}
	
	let gen = generator(10);
	console.log("gen.next().value: ",gen.next().value);
	console.log("gen.next().value: ",gen.next().value);
}

{
	/**
	 * 迭代器将二维数组变为一维数组
	 */
	function* iterArr(arr){
		if(Array.isArray(arr)){
			for(let i=0; i< arr.length; i++){
				yield* iterArr(arr[i]);
			}
		}else{
			yield arr;
		}
	}
	
	let arr = [ 'a', 
				['b',
					[ 'c', 
						['d', 'e'],
					],
				],
			  ];
	var gen = iterArr(arr);
	console.log("[...gen]: ",[...gen]);
}