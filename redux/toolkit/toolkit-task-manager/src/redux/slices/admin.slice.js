import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, handleEmployeeAccount, readEmployee, readTodo, registerEmployee } from "../actions/admin.actions";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(registerEmployee.pending, (state, { payload }) => {
            state.loading = true
            state.success = false
        })
        .addCase(registerEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
        })
        .addCase(registerEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(readEmployee.pending, (state, { payload }) => {
            state.loading = true
            // state.success = false
        })
        .addCase(readEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allEmployees = payload
        })
        .addCase(readEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(handleEmployeeAccount.pending, (state, { payload }) => {
            state.loading = true
            state.updateSuccess = false
        })
        .addCase(handleEmployeeAccount.fulfilled, (state, { payload }) => {
            state.loading = false
            state.updateSuccess = true
        })
        .addCase(handleEmployeeAccount.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(createTodo.pending, (state, { payload }) => {
            state.loading = true
            state.createSuccess = false
        })
        .addCase(createTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createSuccess = true
        })
        .addCase(createTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteTodo.pending, (state, { payload }) => {
            state.loading = true
            state.deleteSuccess = false
        })
        .addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.deleteSuccess = true
        })
        .addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(readTodo.pending, (state, { payload }) => {
            state.loading = true
            // state.deleteSuccess = false
        })
        .addCase(readTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allTodos = payload
        })
        .addCase(readTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer