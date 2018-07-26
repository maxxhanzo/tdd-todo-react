import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import TaskList from '../components/TaskList'


it("should render", ()=>{
	const wrapped = shallow(<TaskList />)
	const div = document.createElement('div');
	ReactDOM.render(wrapped, div);
	ReactDOM.unmountComponentAtNode(div);
})
