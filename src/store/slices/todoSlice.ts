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
    total: number;
}

const initialState: todoSliceState = {
    todos: [],
    total: 0
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // signle add kr dia 
            const newTodo = action.payload;
            state.todos.push(newTodo)
            state.total++;
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => !(todo.id === action.payload.id && action?.payload?.isDeleted));
            state.total--;
        },
        setTodos: (state, action) => {
            const data = action.payload;
            state.todos = data.todos;
            state.total = data.total;
        },
        resetTodos: (state) => {
            state.todos = initialState.todos;
            state.total = initialState.total;
        },
    },
})

export const { setTodos, resetTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer