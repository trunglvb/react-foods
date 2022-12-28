import { createSlice } from "@reduxjs/toolkit";
const userData =
    localStorage.getItem("users") !== null
        ? JSON.parse(localStorage.getItem("users"))
        : [];

const registerSlice = createSlice({
    name: "register",
    initialState: {
        users: userData,
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
            localStorage.setItem(
                "users",
                JSON.stringify(state.users.map((item) => item))
            );
        },
    },
});

const userReducer = registerSlice.reducer;

export const { addUser } = registerSlice.actions;

export default userReducer;
