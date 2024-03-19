import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";


describe('Todo component is working correctly' , () => {
    const todo = {id: 5, text: "Hacer la compra", completed: false};
    render(<Todo todo={todo} />);
    const todoElement  = screen.getByTestId(`todo-test-${todo.id}`);


    it('should render Todo component', () => {        
        expect(todoElement).toBeInTheDocument();
    });
    
    it('should have right text', () => {        
        expect(todoElement).toHaveTextContent(todo.text);
    });
});
