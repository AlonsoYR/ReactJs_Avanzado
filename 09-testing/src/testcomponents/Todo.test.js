import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

afterEach(() => cleanup());

describe('Todo component is working correctly' , () => {
    const todo = {id: 5, text: "Hacer la compra", completed: false};
    render(<Todo todo={todo} />);
    const todoElement  = screen.getByTestId(`todo-test-${todo.id}`);
    const checkBox = todoElement.querySelector('#checkBox');


    it('should render Todo component', () => {        
        expect(todoElement).toBeInTheDocument();
    });
    
    it('should have right text', () => {        
        expect(todoElement).toHaveTextContent(todo.text);
    });

    const todo2 = {id: 12, text: "Hacer la compra", completed: true};
    render(<Todo todo={todo2} />);
    const todoElement2  = screen.getByTestId(`todo-test-${todo2.id}`);
    const checkbox2 = todoElement2.querySelector('#checkbox')
    it('should not be checked', () => {        
        expect(checkbox2).toBeChecked();
    });

    it('matches snapshot', () => {        
        const snapTodo = {id: 1, text: "Pasar los test", completed: false};
        const tree = renderer.create(<Todo todo={snapTodo}/>);
        expect(tree).toMatchSnapshot;
    });

});
