import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../share/utility";
// import api from "../api";

export const registerEmployee = createAsyncThunk(
    "registerEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/employees", userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readEmployee = createAsyncThunk(
    "readEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/employees", { params: { role: "employee" } })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const handleEmployeeAccount = createAsyncThunk(
    "handleEmployeeAccount",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch(`/employees/${userData.id}`, userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const createTodo = createAsyncThunk(
    "createTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post(`/todos`, todoData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readTodo = createAsyncThunk(
    "readTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get(`/todos`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete(`/todos/${id}`)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })