const keyString =  'abcdefghijklmnopqrstuvwxyz_';
fetch('challengeText.txt').then(res=>res.text()).then(data=>processData(data));

function processData(data){
	let map = mapData(data);
	const num = map.get("_");
	result = filterMap(map, num);
	console.log("challenge 2 result:", result)
}

function mapData(data){
	lyst = data.split("")
	const map = new Map()
	lyst.forEach(l=>{
		if(map.has(l)){
			map.set(l, map.get(l)+1);
		}else{
			map.set(l, 1);
		}
	});

	let sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]))

	return sortedMap;
}

function filterMap(map, num){
	let result = ''
	for(let [key, val] of map.entries()){
		if(val > num){
			result += key;
		}
	}
	
	return result;
}