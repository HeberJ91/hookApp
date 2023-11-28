import {fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => { 
    
    const todo = {
        id:1,
        description: 'Piedra ',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    

    test('debe de mostrar el todo pendiente de completar', () => { 
        
        render(
            <TodoItem
                todo={ todo}
                onDeleteTodo={ onDeleteTodoMock}
                onToggleTodo={ onToggleTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');

     })


     test('debe de mostrar el todo completado', () => { 
        
        todo.done= true;

        render(
            <TodoItem
                todo={ todo}
                onDeleteTodo={ onDeleteTodoMock}
                onToggleTodo={ onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

     })


     test('debe de llamar el ToggleTodo cuando se hace click', () => { 
        render(
            <TodoItem
                todo={ todo}
                onDeleteTodo={ onDeleteTodoMock}
                onToggleTodo={ onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

     })


     test('debe de llamar al DeleteTodo', () => { 
        render(
            <TodoItem
                todo={ todo}
                onDeleteTodo={ onDeleteTodoMock}
                onToggleTodo={ onToggleTodoMock}
            />
        );

       
        const deletebutton = screen.getByRole('button');
        fireEvent.click(deletebutton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

     })

 })