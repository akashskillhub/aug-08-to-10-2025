import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { cart: [] },
    reducers: {
        // action + reducer
        addToCart: (state, { payload }) => {
            state.cart.push(payload)
        }
    },
    extraReducers: builder => builder


})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer