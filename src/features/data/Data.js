import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setWeightBonds,
  setProfitBonds,
  setWeightStocks,
  setProfitStocks,
  setWeightEtf,
  setProfitEtf,
  setWeightReits,
  setProfitReits,
  setTotal,
  setLowRisk,
  setMediumRisk,
  setHighRisk,
  selectData
} from './dataSlice';
import './Data.css'

export default function Data() {

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  function editValue() {
    const newValue = Number(prompt(`Set new value for this field (%):`))
    return newValue
  }

  return (

  <div>
    <div>
      <table className="app">
        <tr>
          <th>Asset</th>
          <th>Weight</th>
          <th>Profit</th>
        </tr>
        <tr>
          <th>Bonds</th>
          <td 
            className="input__data"
            onClick={() => {
              dispatch(setWeightBonds(editValue()))
              dispatch(setTotal())
            }}
          >
            {data.weightBonds}%
          </td>
          <td 
            className="input__data"
            onClick={() => {
              dispatch(setProfitBonds(editValue()))
              dispatch(setTotal())
            }}
          >
            {data.profitBonds}%
          </td>
        </tr>
        <tr>
          <th>Stocks</th>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setWeightStocks(editValue()))
              dispatch(setTotal())
            }}
          >
            {data.weightStocks}%
          </td>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setProfitStocks(editValue()))
              dispatch(setTotal())
            }}
          >
            {data.profitStocks}%
          </td>
        </tr>
        <tr>
          <th>ETF</th>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setWeightEtf(editValue()))
              dispatch(setTotal())
            }}
          > 
            {data.weightEtf}%
          </td>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setProfitEtf(editValue()))
              dispatch(setTotal())
              }}
          >
            {data.profitEtf}%
          </td>
        </tr>
        <tr>
          <th>REITs</th>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setWeightReits(editValue()))
              dispatch(setTotal())
              }}
          >
            {data.weightReits}%
          </td>
          <td 
            className="input__data"
            onClick={() => { 
              dispatch(setProfitReits(editValue()))
              dispatch(setTotal())
            }}
          >
            {data.profitReits}%
          </td>
        </tr>
        <tr>
          <th>TOTAL</th>
          <td>{data.total}%</td>
          <td>{data.totalRent}%</td>
        </tr>
      </table>
    </div>

    <div className="standards-container">
      <h3>Investing standards</h3>
      <button onClick={() => dispatch(setLowRisk())}>Low risk</button>
      <button onClick={() => dispatch(setMediumRisk())}>Medium risk</button>
      <button onClick={() => dispatch(setHighRisk())}>High risk</button>
    </div>
  </div>
  );
}



/*

  function handlestandard(standard) {
    switch (standard) {
      case "low":
        setData({
          ...data,
          weightBonds: 70,
          weightStocks: 10,
          weightEtf: 10,
          weightReits: 10,
        });
        break;
      case "medium":
        setData({
          ...data,
          weightBonds: 50,
          weightStocks: 30,
          weightEtf: 10,
          weightReits: 10,
        });
        break;
      case "high":
        setData({
          ...data,
          weightBonds: 30,
          weightStocks: 30,
          weightEtf: 20,
          weightReits: 20,
        });
        break;
      default:
        break;
    }
  }

  function edit(asset) {

    const newWeight = Number(prompt(`Set new ${asset} weight (%):`))
    const newProfit = Number(prompt(`Set new ${asset} profit (%):`))
    
    switch (asset) {
      case "bonds":
        setData({
          ...data,
          weightBonds: newWeight,
          profitBonds: newProfit,
        })
        break;
      case "stocks":
        setData({
          ...data,
          weightStocks: newWeight,
          profitStocks: newProfit,
        })
        break;
      case "etf":
        setData({
          ...data,
          weightEtf: newWeight,
          profitEtf: newProfit,
        })
        break;
      case "reits":
        setData({
          ...data,
          weightReits: newWeight,
          profitReits: newProfit,
        })
        break;

      default:
        break;
    }
  }
*/