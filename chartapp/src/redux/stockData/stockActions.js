import axios from 'axios'
import {
    FETCH_STOCK_FAILURE,
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_REQUEST
} from './stockTypes'


export const fetchStock = (symbol) => async dispatch => {
    const API_KEY = 'BNQAM0M12SG9BFOM';

    let stockSymbol = symbol;

    let stockChartXValues = [];
    let stockChartCloseValues = [];
    let stockChartOpenValues = [];
    let stockChartHighValues = [];
    let stockChartLowValues = [];

    try{
        await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);

                    for(let key in data['Time Series (Daily)']) {
                        stockChartXValues.push(key);
                        stockChartCloseValues.push(data['Time Series (Daily)'][key]['4. close']);
                        stockChartOpenValues.push(data['Time Series (Daily)'][key]['1. open']);
                        stockChartHighValues.push(data['Time Series (Daily)'][key]['2. high']);
                        stockChartLowValues.push(data['Time Series (Daily)'][key]['3. low']);

                    }
                }
            )
        
        const dailyStock = {
            symbol: stockSymbol,
            stockChartXData: stockChartXValues,
            stockChartCloseData: stockChartCloseValues,
            stockChartOpenData: stockChartOpenValues,
            stockChartHighData: stockChartHighValues,
            stockChartLowData: stockChartLowValues 
        };

        dispatch({
            type: FETCH_STOCK_SUCCESS,
            payload: dailyStock
        })
    }catch(e){
        console.log(e)
    }
}