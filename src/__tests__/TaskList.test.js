import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import TaskList from '../components/TaskList'


it("should render", ()=>{
	const wrapped = shallow(<TaskList />)
	const div = document.createElement('div');
	ReactDOM.render(wrapped, div);
	ReactDOM.unmountComponentAtNode(div);
})

it('should render zero items', () => {
	const wrapped = shallow(<TaskList tasks={[]}/>);
	expect(wrapped.find('li').length).toEqual(0);
});

it('should render undefined items', () => {
	const wrapped = shallow(<TaskList tasks={undefined}/>);
	expect(wrapped.find('li').length).toEqual(0);
});

it('should render some items', () => {
	const items = [{todo:"buy a ducati", checked:false}];
	const wrapped = shallow(<TaskList tasks={items}/>);
	expect(wrapped.find('li').length).toEqual(1);
});


it("should detect click", ()=>{
	const onKeyPress = spy();
	const wrapped = shallow(<TaskList tasks = {[{todo:"a", checked:false}]}
		onTaskClick={onKeyPress}
		/>)
	wrapped.find("li").simulate("click");
	expect(onKeyPress.called).toBe(true);

})


