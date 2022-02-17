import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name: "user",
    initialState: {
        currentUser: {},
    },
    reducers: {
        logIn: (state, action) => {
            state.currentUser = action.payload;
        },
        logOut: (state) => {
            state.currentUser = {};
        }
    },
})

const { reducer, actions } = user;

export const { logOut, logIn } = actions;

export default reducer;