import { createSlice } from "@reduxjs/toolkit";

const userLogin =
    localStorage.getItem("userLogin") !== null
        ? JSON.parse(localStorage.getItem("userLogin"))
        : {};
const isLogin =
    localStorage.getItem("isLogin") !== null
        ? JSON.parse(localStorage.getItem("isLogin"))
        : false;
const initialState = {
    userLogin: userLogin,
    isLogin: isLogin,
};

const loginSLice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        addUserLogin(state, action) {
            state.userLogin = action.payload;
            state.isLogin = true;
            localStorage.setItem("userLogin", JSON.stringify(state.userLogin));
            localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
        },

        removeUserLogin(state, action) {
            state.isLogin = false;
            localStorage.removeItem("userLogin");
            localStorage.removeItem("isLogin");
        },
    },
});

const loginReducer = loginSLice.reducer;

export const { addUserLogin, removeUserLogin } = loginSLice.actions;

export default loginReducer;
