import axios from 'axios'
import {
    FETCH_NFTY_SUCCESS
} from './nftyTypes'

function prepareDate(d){
    return Date.parse(d);
}


export const fetchNfty = (symbol) => async dispatch => {
    const API_KEY = 'BNQAM0M12SG9BFOM';

    let nftySymbol = symbol;

    let nftyChartXValues = [];
    let nftyChartCloseValues = [];
    let nftyChartOpenValues = [];
    let nftyChartHighValues = [];
    let nftyChartLowValues = [];
    let nftyChartVolumeValues = [];

    try{
        await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${nftySymbol}&outputsize=full&apikey=${API_KEY}`)
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
                        nftyChartXValues.push(d);
                        nftyChartCloseValues.push(Number(data['Time Series (Daily)'][key]['4. close']));
                        nftyChartOpenValues.push(Number(data['Time Series (Daily)'][key]['1. open']));
                        nftyChartHighValues.push(Number(data['Time Series (Daily)'][key]['2. high']));
                        nftyChartLowValues.push(Number(data['Time Series (Daily)'][key]['3. low']));
                        nftyChartVolumeValues.push(Number(data['Time Series (Daily)'][key]['5. volume']));

                    }
                }
            )

        
        
        const nftyStock = {
            symbol: nftySymbol,
            nftyChartXData: nftyChartXValues,
            nftyChartCloseData: nftyChartCloseValues,
            nftyChartOpenData: nftyChartOpenValues,
            nftyChartHighData: nftyChartHighValues,
            nftyChartLowData: nftyChartLowValues,
            nftyChartVolumeData: nftyChartVolumeValues 
        };

        dispatch({
            type: FETCH_NFTY_SUCCESS,
            payload: nftyStock
        })
    }catch(e){
        console.log(e)
    }
}