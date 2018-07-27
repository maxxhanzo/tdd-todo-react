import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import EnterTask from '../components/EnterTask'

it("should render", ()=>{
	const div = document.createElement('div');
	ReactDOM.render(<EnterTask />, div);
	ReactDOM.unmountComponentAtNode(div);
})


it("contains an input element", ()=>{
	const wrapped = shallow(<EnterTask />);
	expect(wrapped.find("input").length).toEqual(1);
})


it("should detect enter key press", ()=>{
	const eventObject = {which: 13, Key: "Enter", KeyCode:13, target:{value:"test value"}};
	const onKeyPress = spy();
	const wrapped = shallow(<EnterTask onTaskEnter = {onKeyPress}/>)
	wrapped.find("input").simulate("keyPress", eventObject);
	expect(onKeyPress.called).toBe(true);
})




