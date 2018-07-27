import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it("should render one div component", ()=>{
	const wrapped = shallow(<App />);
	expect(wrapped.find(".App").length).toEqual(1);
});

it("should contain task input component", ()=>{
	const wrapped = shallow(<App />);
	expect(wrapped.find("EnterTask").length).toEqual(1);
});

it("should add task to the list when addlist is called", ()=>{
	const wrapped = shallow(<App />);
	wrapped.instance().handleTaskEnter("simple example task");
	expect(wrapped.state("list")).toEqual([{todo:"simple example task", checked:false}]);
})

it("passes handleTaskEnter to EnterTask", ()=>{
	const wrapped = shallow(<App />);
	const inputArea = wrapped.find("EnterTask");
	const handleTaskEnter = wrapped.instance().handleTaskEnter;
	expect(inputArea.prop("onTaskEnter")).toEqual(handleTaskEnter);
})


it("the binding of function handleTaskEnter passed as a prop is correct", ()=>{
	const wrapped = shallow(<App />);
	const inputArea = wrapped.find("EnterTask");
	inputArea.prop("onTaskEnter")("example task - make a trip");
	expect(wrapped.state("list")).toEqual([{todo:"example task - make a trip", checked:false}]);
})

it("passes handleTaskClick to TaskList", ()=>{
	const wrapped = shallow(<App />);
	const listDisplayArea = wrapped.find("TaskList");
	const handleTaskClick = wrapped.instance().handleTaskClick;
	expect(listDisplayArea.prop("onTaskClick")).toEqual(handleTaskClick);
})


it("the binding of function handleTaskClick passed as a prop is correct", ()=>{
	const wrapped = shallow(<App />);
	wrapped.setState({list:[{todo:"example task - make a trip", checked:false},{todo:"go to work", checked:false}]})
	const listDisplayArea = wrapped.find("TaskList");
	listDisplayArea.prop("onTaskClick")(1);
	expect(wrapped.state("list")).toEqual([{todo:"example task - make a trip", checked:false},{todo:"go to work", checked:true}]);
})

it('renders the items', () => {
	const wrapped = mount(<App/>);
	wrapped.instance().handleTaskEnter('go to a movie');
	wrapped.instance().handleTaskEnter('study');
	// console.log(wrapper.find('.tasks'))
	wrapped.update();
	expect(wrapped.find('li').length).toEqual(2);
	wrapped.unmount()
});

