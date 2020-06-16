import {
    FETCH_NFTY_SUCCESS
} from './nftyTypes'

const initialState = {
    nftyStock: null 
};

export default function (state = initialState, action){
    const {type, payload} = action;

    if(type === FETCH_NFTY_SUCCESS){
        return{
            ...state,
            nftyStock: payload
        };
    }else{
        return state 
    }
}