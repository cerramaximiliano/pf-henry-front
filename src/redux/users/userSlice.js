import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    users: [],
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
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
