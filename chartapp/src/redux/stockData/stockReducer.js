import {
    FETCH_STOCK_SUCCESS,
    FETCH_STOCK_FAILURE,
    FETCH_STOCK_REQUEST
} from './stockTypes'

const initialState = {
    loading: false,
    dailyStock: null,
    errMess: null 
};

export default function (state = initialState, action){
    const {payload} = action;

    switch(action.type){
        case FETCH_STOCK_REQUEST:
            return{
                ...state,
                loading: true,
                dailyStock: [],
                errMess: null 
            }
        
        case FETCH_STOCK_SUCCESS:
            return{
                ...state,
                loading: false,
                dailyStock: payload,
                errMess: null 
            }

        case FETCH_STOCK_FAILURE:
            return{
                ...state,
                loading: false,
                dailyStock: [],
                errMess: payload
            }
        default:
            return state;
    }


    
}