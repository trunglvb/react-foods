import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const totalQuantity =
    localStorage.getItem("totalQuantity") !== null
        ? JSON.parse(localStorage.getItem("totalQuantity"))
        : 0;

const setItemsFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(item));

    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));

    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
};

const cartSlice = createSlice({
    name: "cartItems",
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    category: newItem.category,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems
                .map((item) => item.totalPrice)
                .reduce((total, currentValue) => total + currentValue, 0);

            setItemsFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
        decreaseItem(state, action) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            state.totalQuantity--;
            if (existingItem.quantity >= 2) {
                existingItem.quantity--;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) -
                    Number(action.payload.price);
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
            }
            state.totalAmount = state.cartItems
                .map((item) => item.totalPrice)
                .reduce((total, currentValue) => total + currentValue, 0);
            setItemsFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
        deleteItem(state, action) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            state.totalAmount = state.cartItems
                .map((item) => item.totalPrice)
                .reduce((total, currentValue) => total + currentValue, 0);

            setItemsFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
    },
});

const cartReducer = cartSlice.reducer;
export const { addItem, decreaseItem, deleteItem } = cartSlice.actions;

export default cartReducer;
