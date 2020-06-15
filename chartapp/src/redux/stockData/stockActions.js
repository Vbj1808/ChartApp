import axios from 'axios'
import {
    FETCH_STOCK_REQUEST,
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_FAILURE
} from './stockTypes'

export const fetchStockRequest = () => {
    return{
        type: FETCH_STOCK_REQUEST
    }
}


const fetchStockSuccess = stocks => {
    return{
        type: FETCH_STOCK_SUCCESS,
        payload: stocks
    }
}

const fetchStockFailure = error => {
    return{
        type: FETCH_STOCK_FAILURE,
        payload: error 
    }
}



export const fetchStocks = () => {
    const API_KEY = 'BNQAM0M12SG9BFOM';
    const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=${API_KEY}` 
    return (dispatch) => {
        dispatch(fetchStockRequest)
        
        axios.get(API_CALL)
            .then(response => {
                const stocks = response.data
                dispatch(fetchStockSuccess(stocks))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchStockFailure(errorMsg))
            })
    }
}