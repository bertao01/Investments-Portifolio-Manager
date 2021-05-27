import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        weightBonds: 25,
        profitBonds: 0,
        weightStocks: 25,
        profitStocks: 0,
        weightEtfs: 25,
        profitEtfs: 0,
        weightReits: 25,
        profitReits: 0,
        total:100,
        totalRent: 0
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
        setWeightEtfs : (state, action) => {
            state.weightEtfs = action.payload
        },
        setProfitEtfs : (state, action) => {
            state.profitEtfs = action.payload
        },
        setWeightReits : (state, action) => {
            state.weightReits = action.payload
        },
        setProfitReits : (state, action) => {
            state.profitReits = action.payload
        },
        setTotal : (state, action) => {
            state.total = state.weightStocks + state.weightEtfs + state.weightReits + +state.weightBonds;

            state.totalRent = (state.weightStocks * state.profitStocks + state.weightEtfs * state.profitEtfs + state.weightReits * state.profitReits + state.weightBonds * state.profitBonds) / 100;
        },
        setLowRisk : (state) => {
            state.weightBonds = 70 
            state.weightStocks = 10
            state.weightEtfs = 10
            state.weightReits = 10
        },
        setMediumRisk : (state) => {
            state.weightBonds = 40 
            state.weightStocks = 20
            state.weightEtfs = 20
            state.weightReits = 20
        },
        setHighRisk : (state) => {
            state.weightBonds = 25 
            state.weightStocks = 25
            state.weightEtfs = 25
            state.weightReits = 25
        },
        
        
        
    }
});

export const { 
    setWeightBonds,
    setProfitBonds,
    setWeightStocks,
    setProfitStocks,
    setWeightEtfs,
    setProfitEtfs,
    setWeightReits,
    setProfitReits,
    setTotal,
    setLowRisk,
    setMediumRisk,
    setHighRisk
 } = dataSlice.actions;

export const selectData = (state) => state.data;

export default dataSlice.reducer;
