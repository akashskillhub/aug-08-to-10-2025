import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:5000/products"

export const createProduct = createAsyncThunk(
    "createProduct",
    async (productData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.post(API_URL, productData)
            return true
            // success : true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const readProduct = createAsyncThunk(
    "readProduct",
    async (productData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.get(API_URL)
            return data
            // allProducts : data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (productData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.patch(`${API_URL}/${productData.id}`, productData)
            return true
            // updateSuccess : true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.delete(`${API_URL}/${id}`)
            return true
            // deleteSuccess:true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })