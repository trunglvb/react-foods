import { createSlice } from "@reduxjs/toolkit";

const reivews =
    localStorage.getItem("reviews") !== null
        ? JSON.parse(localStorage.getItem("reviews"))
        : [];
const initialState = {
    reviews: reivews,
};

const reivewSlice = createSlice({
    name: "review",
    initialState: initialState,
    reducers: {
        addReview(state, action) {
            const newRivew = action.payload;
            state.reviews.unshift({
                enteredName: newRivew.enteredName,
                enteredEmail: newRivew.enteredEmail,
                reviewMsg: newRivew.reviewMsg,
            });
            localStorage.setItem(
                "reviews",
                JSON.stringify(state.reviews.map((item) => item))
            );
        },
    },
});

const reviewReducer = reivewSlice.reducer;

export const { addReview } = reivewSlice.actions;

export default reviewReducer;
