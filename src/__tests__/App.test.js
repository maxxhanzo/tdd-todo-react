import React from 'react';
import {shallow} from 'enzyme';
// import {mount} from 'enzyme';
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
	expect(wrapped.state("list")).toEqual(["simple example task"]);
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
	expect(wrapped.state("list")).toEqual(["example task - make a trip"]);
})


