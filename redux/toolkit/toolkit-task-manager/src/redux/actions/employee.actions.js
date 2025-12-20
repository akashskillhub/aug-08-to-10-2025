import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../share/utility";

export const readEmployeeTodo = createAsyncThunk(
    "readEmployeeTodo",
    async (empId, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todos", { params: { employee: empId } })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const completeTodo = createAsyncThunk(
    "completeTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch(`/todos/${todoData.id}`, todoData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })