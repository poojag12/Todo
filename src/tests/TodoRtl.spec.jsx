import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Todo from "../Todo";

describe('Todo', () => {
    it('should render todo Todo ', () => {
        const {asFragment} = render(<Todo/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should set new todo item in state', () => {
        const {getByText, container} = render(<Todo/>);

        const todoInput = container.querySelector("input");
        fireEvent.change(todoInput, {target: {value: 'Read book'}});

        const addTodo =  container.querySelector("button");
        fireEvent.click(addTodo, {preventDefault: jest.fn()});

        const todoItem = getByText('Read book');
        expect(todoItem).toBeDefined();
    });
});