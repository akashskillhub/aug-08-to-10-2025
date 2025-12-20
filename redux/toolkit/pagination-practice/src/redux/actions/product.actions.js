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
                    _limit: productData ? productData.limit : 5,
                    _page: productData ? productData.page : 1
                }
            })
            const total = headers.get("X-Total-Count") // number of records in db.json 
            return { data, total }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })