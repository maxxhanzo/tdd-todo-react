import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import EnterTask from './EnterTask';
import TaskList from './TaskList';

function generateUID(){
	let uid = (Math.random() + 1).toString(36).substring(2,7) + new Date().getTime();
	return uid;
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}


	handleTaskClick = (index) => {
		const stateArray = this.state.list.slice();
		stateArray[index].checked = stateArray[index].checked ? false : true;
		this.setState({
			list: stateArray
		})
	}
	handleTaskDelete = (index)=>{
		const stateArray = this.state.list;
		const newArray = stateArray.filter(function(curr, i){
			return i !== index
		})
		this.setState({
			list: newArray
		})
	}

	handleTaskEnter = (todo) => {
		// console.log("hi")
		this.setState({
			list:[].concat(this.state.list).concat([{todo: todo, checked: false}])
		})
	}

	render() {
		return (
		  <div className="App">
		    <header className="To-do list">
		      <img src={logo} className="App-logo" alt="logo" />
		    </header>
		    <EnterTask onTaskEnter={this.handleTaskEnter}/>
		    <TaskList tasks={this.state.list}
		    	onTaskClick={this.handleTaskClick}
		    	onTaskDelete={this.handleTaskDelete}
		    />
		  </div>
		);
	}
}

export default App;
