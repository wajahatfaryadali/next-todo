import { createSlice } from '@reduxjs/toolkit'

export interface SingleTodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
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
        setTodos: (state, action) => {
            const data = action.payload;
            state.todos = data.todos;
            state.total = data.total;
        },
        resetTodos: (state, action) => {
            console.log('state *** ', state)
            console.log('action *** ', action)
        },
    },
})

export const { setTodos, resetTodos, addTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer