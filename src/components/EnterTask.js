import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EnterTask extends Component {
	constructor(props) {
		super(props);
	}

	handleOnKeyPress = (event)=>{
		// console.log(event.which)
		if(event.which === 13){
			if(event.target.value == ""){return false;}
			this.props.onTaskEnter(event.target.value);
			event.target.value = "";
		}
	}


	render(){
		return (
				<input className="task-input" onKeyPress={
					this.handleOnKeyPress
				}>
				</input>
			)
	}
}

EnterTask.propTypes= {
		onTaskEnter: PropTypes.func
};

export default EnterTask;
