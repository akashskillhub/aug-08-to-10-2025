import { createSlice } from "@reduxjs/toolkit";
import { createProduct, readProduct } from "../actions/product.actions";

const productSlice = createSlice({
    name: "productSlice",
    initialState: { allProducts: [] },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(createProduct.pending, (state, { payload }) => {
            state.loading = true
            state.createSuccess = false
        })
        .addCase(createProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createSuccess = true
        })
        .addCase(createProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(readProduct.pending, (state, { payload }) => {
            state.loading = true
            // state.createSuccess = false
        })
        .addCase(readProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            // state.createSuccess = true
            state.allProducts = payload.data
            state.total = payload.total
        })
        .addCase(readProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = productSlice.actions
export default productSlice.reducer