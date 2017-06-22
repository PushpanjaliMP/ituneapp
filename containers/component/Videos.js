import React, { Component} from 'react';
import Display from './Display';
const util = require('util');


class Videos extends Component  {

	render() {

      //var {list} = this.props
        //console.log("this.props"+util.inspect(this.props.list,false,null));
      
		 return (

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <h3> Video Library </h3>
                  </div> 
                  {
                    this.props.list.map((todo) => {
                        return <Display  key={todo.trackId} todo={todo} />
                    })
                  }
                  </div>
              </div>
          )
	}
}

export default Videos