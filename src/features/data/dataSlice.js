import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        weightBonds: 25,
        profitBonds: 4,
        weightStocks: 25,
        profitStocks: 23,
        weightEtf: 25,
        profitEtf: 26,
        weightReits: 25,
        profitReits: 13,
        total:100,
        totalRent:0
    };

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
        setWeightBonds: (state, action) => {
        state.weightBonds = action.payload
        },
        setProfitBonds : (state, action) => {
            state.profitBonds = action.payload
        },
        setWeightStocks : (state, action) => {
            state.weightStocks = action.payload
        },
        setProfitStocks : (state, action) => {
            state.profitStocks = action.payload
        },
        setWeightEtf : (state, action) => {
            state.weightEtf = action.payload
        },
        setProfitEtf : (state, action) => {
            state.profitEtf = action.payload
        },
        setWeightReits : (state, action) => {
            state.weightReits = action.payload
        },
        setProfitReits : (state, action) => {
            state.profitReits = action.payload
        },
        setTotal : (state, action) => {
            state.total = state.weightStocks + state.weightEtf + state.weightReits + state.weightBonds;
        },
        setTotalRent : (state, action) => {
            state.totalRent = (state.weightStocks * state.profitStocks + state.weightEtf * state.profitEtf + state.weightReits * state.profitReits + state.weightBonds * state.profitBonds) / 100;
        },
    }
});

export const { 
    setWeightBonds,
    setProfitBonds,
    setWeightStocks,
    setProfitStocks,
    setWeightEtf,
    setProfitEtf,
    setWeightReits,
    setProfitReits,
    setTotal,
    setTotalRent,
 } = dataSlice.actions;

export const selectData = (state) => state.data;

export default dataSlice.reducer;
