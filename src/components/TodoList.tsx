import React from 'react';
import {ITodoList} from "./TodosReducer";

interface TodoListProps {
    todos: ITodoList;

    toggleTodo(id: number): void;

    removeTodo(id: number): void;
}


const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
    return (
        <div>
            {
                todos.map(todo => (
                        <div key={todo.id}>
                            <span
                                style={{textDecoration: todo.completed ? "line-through":"none"}}
                            >{todo.title}</span>
                            <button onClick={() => toggleTodo(todo.id)}>Toggle
                            </button>
                            <button onClick={() => removeTodo(todo.id)}>Remove
                            </button>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default TodoList;
