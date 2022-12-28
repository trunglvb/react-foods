import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./shopping-cart/cartSlice";
import reviewReducer from "./shopping-cart/reviewSlice";
import userReducer from "./shopping-cart/userSlice";
import loginReducer from "./shopping-cart/loginSlice";

const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
        reviewReducer: reviewReducer,
        userReducer: userReducer,
        loginReducer: loginReducer,
    },
});

export default store;
