import React from "react";
import { useSelector, useDispatch } from 'react-redux';

// Redux slices
import {
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
  setHighRisk,
  selectData
} from './dataSlice';
import './Data.css'

//Styled Components
import styled from 'styled-components'

//Material Ui Icons
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PieChartIcon from '@material-ui/icons/PieChart';

export default function Data() {

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  function editValue() {
    const newValue = +prompt(`Set new value for this field (%):`)

    // console.log(newValue, typeof newValue)

    return newValue
  }

  const assets = ['Bonds','Stocks','Etfs','Reits']

  return (
  <Container>
    <Container>
      <Container>
        <Title>
          <TrendingUpIcon/>
          Investments Manager
          <TrendingUpIcon/>
        </Title>
        <Subtitle>
          Portifolio 
        </Subtitle>
        <Table className="app">
          <TableRow>
            <TableHeader>Assets</TableHeader>
            <TableHeader>Weight</TableHeader>
            <TableHeader>Profit</TableHeader>
          </TableRow>
          
          {/*TABLE ITERABLE CONSTRUCTION*/}
          {
            assets.map((asset,i) => { 

              let setProfit = ''
              let setWeight = ''
              let weight = ''
              let profit = ''

              switch(asset){
                case 'Bonds':
                  setWeight = setWeightBonds
                  setProfit = setProfitBonds
                  weight = data.weightBonds
                  profit = data.profitBonds
                  break
                case 'Stocks':
                  setWeight = setWeightStocks
                  setProfit = setProfitStocks
                  weight = data.weightStocks
                  profit = data.profitStocks
                  break
                case 'Etfs':
                  setWeight = setWeightEtfs
                  setProfit = setProfitEtfs
                  weight = data.weightEtfs
                  profit = data.profitEtfs
                  break
                case 'Reits':
                  setWeight = setWeightReits
                  setProfit = setProfitReits
                  weight = data.weightReits
                  profit = data.profitReits
                break
              }

              return(
                <TableRow>
                  <TableHeader>{asset.toUpperCase()}</TableHeader>
                  <TableData 
                    className="input__data"
                    onClick={() => { 
                      dispatch(setWeight(editValue()))
                      dispatch(setTotal())
                      }}
                  >
                    {
                      weight
                    }% 
                  </TableData>
                  <TableData 
                    className="input__data"
                    onClick={() => { 
                      dispatch(setProfit(editValue()))
                      dispatch(setTotal())
                    }}
                  >
                    {
                      profit
                    }%
                  </TableData>
                  </TableRow>
              )
            })
          }
        
          <TableRow>
            <TableHeader>TOTAL</TableHeader>
            <TableData>{data.total}%</TableData>
            <TableData>{data.totalRent}%</TableData>
          </TableRow>
        </Table>
      </Container>
    </Container>

    <Container className="standards-container">
      <Subtitle>Investing standards</Subtitle>
      <Button onClick={() => {        
          dispatch(setLowRisk())
          dispatch(setTotal())
        }}>Low risk</Button>
      <Button onClick={() => {
        dispatch(setMediumRisk())
        dispatch(setTotal())
      }}>Medium risk</Button>
      <Button onClick={() => {
        dispatch(setHighRisk())
        dispatch(setTotal())
      }}>High risk</Button>
    </Container>
  </Container>
  );
}

const Button = styled.button`

  margin: 5px;
  padding: 5px 0;
  font-weight: bolder;
  font-size: 1.5 rem;

  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }

  @media (max-width: 700px) {
      width: 50%;
  }

`

const Container = styled.div`

@media (max-width: 700px) {
  .standards-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}

`

const Table = styled.table`  
  margin: auto;
  border-radius: 10%;
`

const TableRow = styled.tr`
  
`

const TableData = styled.td`
  
  background-color: darkgoldenrod;
  box-shadow: black 3px 3px 3px;
  padding: 10px;
  border: 1px solid black;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
    transition: 250ms;
}
`

const TableHeader = styled.th`
  
  background-color: darkgoldenrod;
  box-shadow: black 3px 3px 3px;
  padding: 10px;
  border: 1px solid black;
`

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.774);
`

const Subtitle = styled.h3`
  color: rgba(255, 255, 255, 0.774);
`