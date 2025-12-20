import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/articles"

export const createBlog = createAsyncThunk(
    "createBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.post(API_URL, blogData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readBlog = createAsyncThunk(
    "readBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.get(API_URL)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })