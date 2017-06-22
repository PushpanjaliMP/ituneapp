import React, { Component} from 'react'
import { connect} from 'react-redux'
import Videos from './Videos'
import Upload from './Upload'
const util = require('util');

import { loadFile,updateState,uploadFile } from '../../actions/newActions'
import Display from './Display';

class Container extends Component {

	constructor() {
		super();
		console.log("constructor");
		this.state = {
			items: []
		}
	}

	 componentWillMount() {
	// 	//console.log("props data"+JSON.Stringify(this.props));
	 	var {onLoadVideos} = this.props;
	 	onLoadVideos();
	// 	//var {store} = this.context
 //  //   	this.unsubscribe = store.subscribe(() =>
 //  //     		this.forceUpdate()
 //    //	);
  	}


	render() {
			var {list} = this.props
			console.log("container todo"+util.inspect(this.props,false,null))
		   if(list){
		     var finalList = list.items.map((todo,index) => {
		                        return (
		                        		
						               <div className="row">
						              		<div className="col-lg-3">
											<Display  todo={todo} />
											</div>
										</div>
		                          )
		                   })
     
		   } else{
		     var finalList = <div>Hello</div>
		   }

		   return (
		             <div className="container">
		             <h3> Video Library </h3>
		             <Upload onSubmitFile={this.props.onSubmitFile}/>
		             <div>
		             {finalList}
		             </div>
		             </div>
		         )
		    }
} 

const mapStateToProps = (state) => {
	console.log("mapStateToProps"+state)
	return  {
		list: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadVideos : () => {
			console.log("onLoadVideos");
			var load = loadFile()
			load.payload.then((result) => {
				if(result.status ==200) {
				
	 		console.log("result data"+result.data)
	 		//console.log("result data1"+JSON.parse(result.data))
				dispatch(updateState(result.data))
				}
			})
		},
		onSubmitFile: (a,b) => {
			console.log("onsubmitfile");
			var obj = uploadFile(a,b)
			obj.payload.then((result) => {
				if(result.status ==200) {
				//console.log(result)
				//dispatch(updateSuccess(result));
					var load = loadFile()

					load.payload.then((result) => {
						if(result.status ==200) {
						
			 		console.log("result data"+result.data)
			 		//console.log("result data1"+JSON.parse(result.data))
						dispatch(updateState(result.data))
						}
					})
				//dispatch(updateState(result.data))
				}
				dispatch(updateFail(err));
			})
		}
	}
}	


export default connect(
	mapStateToProps,mapDispatchToProps)
(Container)