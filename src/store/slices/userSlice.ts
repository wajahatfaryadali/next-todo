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
    currentUser: userApiResponse;
    authToken: string;
}

const initialState = {
    currentUser: {
        email: '',
        firstName: '',
        gender: '',
        id: '',
        image: '',
        lastName: '',
        token: '',
        username: '',
    },
    authToken: '',
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action?.payload;
            state.authToken = action?.payload?.token ?? "";
        },
        getUser: (state, action) => {
            console.log('action *** ', action.payload)
            console.log('state *** ', state)
        },
        getAuthToken: (state, action) => {
            console.log('action *** ', action.payload)
            console.log('state *** ', state)
        },
        removeUser: (state) => {
            state.currentUser = initialState.currentUser;
            state.authToken = initialState.authToken;
        },
    },
})

export const { setUser, getUser, getAuthToken, removeUser } = userSlice.actions

export default userSlice.reducer