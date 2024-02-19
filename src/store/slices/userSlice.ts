// because this is simple app with less functionality and complexity
// that's why using simple axios method to make api calls
// and using slices just for state management

import { userSliceState } from '@/utils/constants/interfaces';
import { createSlice } from '@reduxjs/toolkit'

const initialState: userSliceState = {
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
        removeUser: (state) => {
            state.currentUser = initialState.currentUser;
            state.authToken = initialState.authToken;
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer