import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import EnterTask from './EnterTask';
import TaskList from './TaskList';



class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	// addTodo = (todo)=>{

	// }

	handleTaskEnter = (todo) => {
		this.setState({
			list:[].concat(this.state.list).concat([todo])
		})
	}

	render() {
		return (
		  <div className="App">
		    <header className="To-do list">
		      <img src={logo} className="App-logo" alt="logo" />
		    </header>
		    <EnterTask onTaskEnter={this.handleTaskEnter}/>
		    <TaskList />
		  </div>
		);
	}
}

export default App;
