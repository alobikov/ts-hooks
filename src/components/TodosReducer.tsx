import React  from 'react';
import {InputForm} from './InputForm'
import TodoList from "./TodoList";

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IAction {
    type: Action;
    payload: {
        id?: number;
        title?: string;
    }
}

export type ITodoList = ITodo[]

export enum Action {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    REMOVE_TODO = "REMOVE_TODO"
}

export function addTodo(title: string) {
    return {type: Action.ADD_TODO, payload: {title}}
}

export function toggleTodo(id: number) {
    return {type: Action.TOGGLE_TODO, payload: {id}}
}

export function removeTodo(id: number) {
    return {type: Action.REMOVE_TODO, payload: {id}}
}

const reducer = (todos: ITodoList, action: IAction): ITodoList => {
    switch (action.type) {
        case Action.ADD_TODO: {
            return [...todos, {
                id: Date.now(),
                title: action.payload.title || '',
                completed: false
            }]
        }
        case Action.TOGGLE_TODO: {
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        }
        case Action.REMOVE_TODO: {
            return todos.filter((todo) => todo.id !== action.payload.id)
        }
        default:
            return todos
    }
}

const TodosReducer: React.FC = () => {
    const [todos, dispatch] = React.useReducer(reducer, [])
    return (
        <div>
            <InputForm onChange={(e: string) => dispatch(addTodo(e))}/>
            <TodoList todos={todos}
                      toggleTodo={(id: number) => dispatch(toggleTodo(id))}
                      removeTodo={(id: number) => dispatch(removeTodo(id))}/>
        </div>
    );
};

export default TodosReducer;
