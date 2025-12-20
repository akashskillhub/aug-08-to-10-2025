import { createSlice } from "@reduxjs/toolkit";
import { completeTodo, readEmployeeTodo } from "../actions/employee.actions";

const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(readEmployeeTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readEmployeeTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeTodos = payload
        })
        .addCase(readEmployeeTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(completeTodo.pending, (state, { payload }) => {
            state.loading = true
            state.updateSuccess = false
        })
        .addCase(completeTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.updateSuccess = true
            // state.employeeTodos = payload
        })
        .addCase(completeTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = employeeSlice.actions
export default employeeSlice.reducer