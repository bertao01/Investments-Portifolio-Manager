import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export default function Data(props) {
  const [data, setData] = useState({
    weightBonds: 25,
    profitBonds: 4,
    weightStocks: 25,
    profitStocks: 23,
    weightEtf: 25,
    profitEtf: 26,
    weightReits: 25,
    profitReits: 13,
  });

  const total =
    data.weightStocks + data.weightEtf + data.weightReits + data.weightBonds;
  const totalRent =
    (data.weightStocks * data.profitStocks +
      data.weightEtf * data.profitEtf +
      data.weightReits * data.profitReits +
      data.weightBonds * data.profitBonds) /
    100;

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
          <td>{data.weightBonds}%</td>
          <td>{data.profitBonds}%</td>
          <i onClick={() => edit("bonds")}>
            <AiFillEdit />
          </i>
        </tr>
        <tr>
          <th>Stocks</th>
          <td>{data.weightStocks}%</td>
          <td>{data.profitStocks}%</td>
          <i onClick={() => edit("stocks")}>
            <AiFillEdit />
          </i>
        </tr>
        <tr>
          <th>ETF</th>
          <td>{data.weightEtf}%</td>
          <td>{data.profitEtf}%</td>
          <i onClick={() => edit("etf")}>
            <AiFillEdit />
          </i>
        </tr>
        <tr>
          <th>REITs</th>
          <td>{data.weightReits}%</td>
          <td>{data.profitReits}%</td>
          <i onClick={() => edit("reits")}>
            <AiFillEdit />
          </i>
        </tr>
        <tr>
          <th>TOTAL</th>
          <td>{total}%</td>
          <td>{totalRent}%</td>
        </tr>
      </table>
    </div>

    <div className="standards-container">
      <h3>Investing standards</h3>
      <button onClick={() => handlestandard("low")}>Low risk</button>
      <button onClick={() => handlestandard("medium")}>Medium risk</button>
      <button onClick={() => handlestandard("high")}>High risk</button>
    </div>
  </div>
  );
}
