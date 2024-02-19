// because this is simple app with less functionality and complexity
// that's why using simple axios method to make api calls
// and using slices just for state management

import { createSlice } from '@reduxjs/toolkit'
import { SingleTodo, todoSliceState } from '@/utils/constants/interfaces';

const initialState: todoSliceState = {
    todos: [],
    completedTodos: [],
    incompleteTodos: [],
    total: 0
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // single adding
            const newTodo = action.payload;
            state.todos.push(newTodo)
            state.total++;
            if (newTodo.completed) {
                state.completedTodos.push(newTodo);
            } else {
                state.incompleteTodos.push(newTodo);
            }
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            const updatedTodo = action.payload;
            if (index !== -1) {
                state.todos[index] = updatedTodo;
                if (updatedTodo.completed) {
                    state.completedTodos.push(updatedTodo);
                    state.incompleteTodos = state.incompleteTodos.filter(todo => todo.id !== updatedTodo.id);
                } else {
                    state.incompleteTodos.push(updatedTodo);
                    state.completedTodos = state.completedTodos.filter(todo => todo.id !== updatedTodo.id);
                }
            }
        },
        deleteTodo: (state, action) => {
            const deletedTodoId = action.payload.id;
            state.todos = state.todos.filter(todo => todo.id !== deletedTodoId);
            state.completedTodos = state.completedTodos.filter(todo => todo.id !== deletedTodoId);
            state.incompleteTodos = state.incompleteTodos.filter(todo => todo.id !== deletedTodoId);
            state.total--;
        },
        setTodos: (state, action) => {

            const { todos, total } = action.payload;
            state.todos = todos;
            state.completedTodos = todos.filter((todo: SingleTodo) => todo.completed);
            state.incompleteTodos = todos.filter((todo: SingleTodo) => !todo.completed);

            state.total = total
        },
        resetTodos: (state) => {
            state.todos = [];
            state.completedTodos = [];
            state.incompleteTodos = [];
        },
    },
})

export const { setTodos, resetTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer