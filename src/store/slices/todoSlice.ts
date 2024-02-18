import { createSlice } from '@reduxjs/toolkit'

// {
//     "todos": [
//       {
//         "id": 19,
//         "todo": "Create a compost pile",
//         "completed": true,
//         "userId": 5 // user id is 5
//       },
//       {...},
//       {...}
//     ],
//     "total": 3,
//     "skip": 0,
//     "limit": 3
//   }


export interface SingleTodo  {
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

export const { setTodos, resetTodos } = todoSlice.actions

export default todoSlice.reducer