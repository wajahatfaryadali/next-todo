import { createSlice } from '@reduxjs/toolkit'
// remove below code
// yhi mongo k sath b use krna hai mongo wali branch me same methods k sath
export interface SingleTodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    isDeleted?: boolean
}

export interface todoSliceState {
    todos: SingleTodo[];
    completedTodos: SingleTodo[];
    incompleteTodos: SingleTodo[];
    total: number;
}

const initialState: todoSliceState = {
    todos: [],
    completedTodos: [],
    incompleteTodos: [],
    total: 0
}

// jha jha //temp likha hai wo testing k liye hai baad me remove krna hai

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // signle add kr dia 
            const newTodo = action.payload;
            state.todos.push(newTodo)
            state.total++;
            //temp
            if (newTodo.completed) {
                state.completedTodos.push(newTodo);
            } else {
                state.incompleteTodos.push(newTodo);
            }
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            // temp
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