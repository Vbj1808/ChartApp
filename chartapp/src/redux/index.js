import {combineReducers} from 'redux';
import dailyStock from './stockData/stockReducer';
import nftyStock from './nftyData/nftyReducer';

const rootReducer =  combineReducers({
    dailyStock: dailyStock,
    nftyStock: nftyStock
})

export default rootReducer;