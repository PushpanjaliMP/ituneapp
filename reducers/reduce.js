const util = require('util');

const reduce = (state = { items: [] },action) => {
	switch(action.type) {
		case 'UPDATE_DATA':
		console.log("state"+util.inspect(state,false,null));
		var i=0;
		//var newstate = state.concat(action.payload)
		var obj1 = action.payload.length;
		var newstate = {};
		newstate.items = [];
		//var j = JSON.stringify(action.payload);
		//	console.log("j"+j);
		var a = {}
		while(i<obj1){
			
			console.log("json parse"+util.inspect(action.payload[i],false,null))
			var b = JSON.parse(action.payload[i]);
			
			newstate.items.push(b)
			i++
			console.log(newstate.items)
		}
		
		console.log("newstate"+newstate)
		//var obj = state.concat(action.payload)
	
		//console.log("obj1"+obj1)

		// while(i<obj1) {
		// 	console.log("while loop")
		// 	var b = obj[i];
		// 	//console.log("chars"+obj[j].slice(0,3));l

		// 	for(var j in b){
		// 		//console.log("b"+b['.↵  wrapperTypes']);
		// 		b[j].replace('↵','');
		// 		b[j].replace(' ','');
				
		// 		console.log("b[j]"+b[j]);
		// 	}
		// 	console.log("b"+b);
		// 	i++;
		// }

		// while (i < obj1) {
		// 	//console.log("obj"+obj[i])
		// 	obj[i].replaceAll('↵  ','');

		// 	newstate = newstate.concat({
		// 		wrappertype: obj[i].wrapperTypes
		// 	})
		// 	i++
		// 	console.log("newstate"+util.inspect(newstate,false,null))
		// }
		// console.log("newstate1"+util.inspect(newstate,false,null))
		return newstate;
		// var newstate = {};
		// var newstate = {items : [...state,action.payload]}
		// 	console.log("newstate"+newstate.items)
		// return  newstate
		case 'UPLOAD_FILE':
			return state;
		case 'UPLOAD_SUCCESS':
			return state;
		case 'UPLOAD_FAIL':
			return state;
	}
}

export default reduce;