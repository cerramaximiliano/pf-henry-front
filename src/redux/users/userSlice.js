import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_detail: {},
    users: [],
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user_detail = action.payload
            console.log('llegue al reducer');
            console.log(state.user_detail);
        },
        setAllUsers: (state, action) => {
            state.users = action.payload
        }
    },
    updateUserData: (state, action) => {
        if (state.user) {
            state.user = { ...state.user, ...action.payload };
        }
    },
});

export const {
    setAllUsers,
    updateUserData,
    setUser
} = userSlice.actions;

export default userSlice.reducer;
