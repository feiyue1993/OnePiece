/**
 * async await
 */
async function func(){
	return 2;
}

func().then(console.log);

const getPosts = () => 
	new Promise((resolve, reject) => {
		resolve([
			{
				name: 'a'
			},{
				name: 'b'
			},{
				name: 'c'
			},{
				name: 'd'
			},{
				name: 'e'
			}
		])
	})


async function func2(){
	try{
		const number = await func();
		const posts = await getPosts();
		console.log(number);
		console.log(posts);
	}catch(e){
		console.log(e);
	}
}

func2();