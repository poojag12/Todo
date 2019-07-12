import React from "react";
import {mount, render, shallow} from "enzyme";
import Todo, {hello} from "../Todo";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Todo', () => {
    it('should render todo Todo', () => {
        const wrapper = shallow(<Todo/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should set new todo item in state', () => {
        const alert = jest.fn();
        global.alert = alert;
        global.console = { log: jest.fn() };

        const wrapper = mount(<Todo />);
        const todoInput = wrapper.find("input");
        expect(global.console.log).toHaveBeenCalled();
        todoInput.simulate('change', {target: { value: 'Read book'}});

        const addTodo = wrapper.find("button");
        addTodo.simulate('click');

        const todoItem = wrapper.find('Read book');
        expect(todoItem).toBeDefined();
    });
});
