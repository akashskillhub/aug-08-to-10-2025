import { createSlice } from "@reduxjs/toolkit";


const bankSlice = createSlice({
    name: "bankSlice",
    initialState: { balance: 1000 },
    reducers: {
        depositMoney: (state, { payload }) => {
            state.balance = state.balance + payload
        },
        widrawMoney: (state, { payload }) => {
            state.balance = state.balance - payload
        },
    },
    extraReducers: builder => builder


})

export const { depositMoney, widrawMoney } = bankSlice.actions
export default bankSlice.reducer