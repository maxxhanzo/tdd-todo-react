import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EnterTask extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	inputValue: ""
		// }
	}

	handleOnKeyPress = (event)=>{
		if(event.Key == "Enter"){
			// console.log(event)
			this.props.onTaskEnter(event.target.value);
		}
	}

	// handleInputChange =(val)=>{
	// 	this.setState({
	// 		inputValue: val
	// 	})
	// 	console.log(this.state.inputValue);
	// }



	render(){
		return (
				<input className="task-input" onKeyPress={
					// this.handleInputChange(e.target.value);
					// e.target.value
					// if(event.Key === "Enter"){
					// 	// this.props.
					// }
					this.handleOnKeyPress
				}>
				</input>
			)
	}
}

EnterTask.propTypes= {
		handleTaskEnter: PropTypes.func.isRequired
};

export default EnterTask;
