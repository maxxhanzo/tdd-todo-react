import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskList extends Component {
	// const taskItems = props.tasks.map((task, index) => {
	// 	return <Task
	// 	onTaskSelect={props.onTaskSelect}
	// 	onTaskDelete={props.onTaskDelete}
	// 	key={index} task={task} />
	// });

	render(){
		return this.props.tasks ?
		(
			<ul className="tasks">
				{this.props.tasks.map((task, index) => (
		          <li key={index}>{task}</li>
		        ))}
			</ul>
		):null
	}

};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
