import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useDispatch, useSelector } from 'react-redux';
import {Input } from 'reactstrap';
import '../App.css'
import { getData } from '../redux/stockData/stockActions';

function StockComponent(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.stock)
    const [symbol, setSymbol] = useState('IBM');

    const fetchData = (symbol) => {
        dispatch(getData({
            symbol: symbol
        }))
    }
    
    return(
        <div className="container">
            <Input type="select" name="symbol" id="symbol" onChange={e => setSymbol(e.target.value)}>
                <option>IBM</option>
                <option>AMZN</option>
                <option>VBJ</option>
            </Input>
        </div>
    )
}


export default StockComponent;