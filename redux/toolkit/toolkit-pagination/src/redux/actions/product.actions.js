import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../api";

const api = axios.create({ baseURL: "http://localhost:5000" })

export const createProduct = createAsyncThunk(
    "createProduct",
    async (productData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/products", productData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const readProduct = createAsyncThunk(
    "readProduct",
    async (productData, { rejectWithValue, getState }) => {
        try {
            const { data, headers } = await api.get("/products", {
                params: {
                    _limit: productData.limit,
                    _page: productData.page
                }
            })
            console.log(headers.get("X-Total-Count"))

            return { data, total: headers.get("X-Total-Count") }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })