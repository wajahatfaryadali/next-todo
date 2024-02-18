import { createSlice } from '@reduxjs/toolkit'

export interface userApiResponse {
    email: string;
    firstName: string;
    gender: string;
    id: number | string;
    image: string;
    lastName: string;
    token: string;
    username: string;
}

export interface userSliceState {
    user: userApiResponse;
    authToken: string;
}

const initialState = {
    user: {},
    authToken: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log('action *** ', action.payload)
            console.log('state *** ', state)
        },
        getUser: (state, action) => {
            console.log('action *** ', action.payload)
            console.log('state *** ', state)
        },
        getAuthToken: (state, action) => {
            console.log('action *** ', action.payload)
            console.log('state *** ', state)
        },
    },
})

export const { setUser, getUser, getAuthToken, } = userSlice.actions

export default userSlice.reducer