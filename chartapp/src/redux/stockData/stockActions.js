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