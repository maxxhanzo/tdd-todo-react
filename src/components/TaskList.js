import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskList extends Component {

	handleOnClick = (index, event) => {
		// console.log(index);
		this.props.onTaskClick(index);
	}

	handleOnDelete = (index, event) => {
		event.stopPropagation();
		// console.log(index);
		this.props.onTaskDelete(index);
	}

	render(){

		if(this.props.tasks){

			const displayList = this.props.tasks.map((task,index)=>{
				return (
						<li
							onClick = {this.handleOnClick.bind(null, index)}
							className={`task-single ${task.checked?"checked":""}`}
							key={index}>
							{task.todo}
							<a onClick={this.handleOnDelete.bind(null, index)}>delete</a>
						</li>
					);
			});

			return (
					<ul className="tasks">
						{displayList}
					</ul>
				);

		}else{return null}
	}

};

TaskList.propTypes = {
  tasks: PropTypes.array
};

export default TaskList;
