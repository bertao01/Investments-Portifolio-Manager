import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        weightBonds: 25,
        profitBonds: 0,
        weightStocks: 25,
        profitStocks: 0,
        weightEtf: 25,
        profitEtf: 0,
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
        setLowRisk : (state, action) => {
            state.weightBonds = 70 
            state.weightStocks = 10
            state.weightEtf = 10
            state.weightReits = 10
        },
        setMediumRisk : (state, action) => {
            state.weightBonds = 40 
            state.weightStocks = 20
            state.weightEtf = 20
            state.weightReits = 20
        },
        setHighRisk : (state, action) => {
            state.weightBonds = 25 
            state.weightStocks = 25
            state.weightEtf = 25
            state.weightReits = 25
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
    setLowRisk,
    setMediumRisk,
    setHighRisk
 } = dataSlice.actions;

export const selectData = (state) => state.data;

export default dataSlice.reducer;
