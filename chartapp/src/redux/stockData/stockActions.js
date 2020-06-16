import axios from 'axios'
import {
    FETCH_STOCK_FAILURE,
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_REQUEST
} from './stockTypes'

function prepareDate(d){
    return Date.parse(d);
}


export const fetchStock = (symbol) => async dispatch => {
    const API_KEY = 'BNQAM0M12SG9BFOM';

    let stockSymbol = symbol;

    let stockChartXValues = [];
    let stockChartCloseValues = [];
    let stockChartOpenValues = [];
    let stockChartHighValues = [];
    let stockChartLowValues = [];
    let stockChartVolumeValues = [];

    try{
        await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=full&apikey=${API_KEY}`)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                
                function(data){
                    console.log(data);

                    for(let key in data['Time Series (Daily)']) {
                        let d = prepareDate(key);
                        stockChartXValues.push(d);
                        stockChartCloseValues.push(Number(data['Time Series (Daily)'][key]['4. close']));
                        stockChartOpenValues.push(Number(data['Time Series (Daily)'][key]['1. open']));
                        stockChartHighValues.push(Number(data['Time Series (Daily)'][key]['2. high']));
                        stockChartLowValues.push(Number(data['Time Series (Daily)'][key]['3. low']));
                        stockChartVolumeValues.push(Number(data['Time Series (Daily)'][key]['6. volume']));

                    }
                }
            )

        
        
        const dailyStock = {
            symbol: stockSymbol,
            stockChartXData: stockChartXValues,
            stockChartCloseData: stockChartCloseValues,
            stockChartOpenData: stockChartOpenValues,
            stockChartHighData: stockChartHighValues,
            stockChartLowData: stockChartLowValues,
            stockChartVolumeData: stockChartVolumeValues 
        };

        dispatch({
            type: FETCH_STOCK_SUCCESS,
            payload: dailyStock
        })
    }catch(e){
        console.log(e)
    }
}