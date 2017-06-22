import axios from 'axios';

export const loadFile = () => {
	var req = axios.get("http://localhost:3000/data")
	return {
		type: "LOAD_VIDEOS",
		payload: req
	}
}

export const updateState = (result) => {
	return {
		type:'UPDATE_DATA',
		payload:result
	}
}

export const updateSuccess = (result) => {
	return {
		type:'UPLOAD_SUCCESS',
		payload:result
	}
}

export const updateFail= (result) => {
	return {
		type:'UPDATE_FAIL',
		payload:result
	}
}

export const uploadFile = (name,file) => {
		//console.log("file"+file)
		//console.log("name"+name)
		// let data = new FormData();
		// data.append('file',document);
		// data.append('name',name);
		//console.log("data"+file);
	var req = axios({
			method:'post',
			url:"http://localhost:3000/files",
			data: file,
			name:name
		})
	console.log("uploadfile")
	return {
		type:'UPLOAD_FILEDATA',
		payload:req
	}
}