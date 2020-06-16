import {
    FETCH_STOCK_SUCCESS
} from './stockTypes'

const initialState = {
    dailyStock: null 
};

export default function (state = initialState, action){
    const {type, payload} = action;

    if(type === FETCH_STOCK_SUCCESS){
        return{
            ...state,
            dailyStock: payload
        };
    }else{
        return state 
    }
}