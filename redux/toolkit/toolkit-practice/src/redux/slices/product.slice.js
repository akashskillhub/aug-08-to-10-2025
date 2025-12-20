import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, readProduct, updateProduct } from "../actions/product.actions";

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
        })
        .addCase(readProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allProducts = payload
        })
        .addCase(readProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateProduct.pending, (state, { payload }) => {
            state.loading = true
            state.updateSuccess = false
        })
        .addCase(updateProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.updateSuccess = true
        })
        .addCase(updateProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteProduct.pending, (state, { payload }) => {
            state.loading = true
            state.deleteSuccess = false
        })
        .addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.deleteSuccess = true
        })
        .addCase(deleteProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = productSlice.actions
export default productSlice.reducer