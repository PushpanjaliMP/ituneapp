import React, { Component } from 'react'
const util = require('util');


class Display extends Component {

render() {

	//console.log("this.props"+this.props.todo)

	return (
			<div className="col-lg-3">
			<div width="100px" height="100px">
			<a href={this.props.todo.previewUrl}>
			<img src={this.props.todo.artworkUrl60}  width="100px" height="100px"/>
			</a>
			<p>{this.props.todo.trackName}</p>
			</div>
			</div>
	)
}
}

export default Display