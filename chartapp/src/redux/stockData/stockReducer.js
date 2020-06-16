const initialState = {
    loading : false,
    data : [],
    error: ''
}


const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "FETCH_STOCK_REQUEST":
            return{
                ...state,
                loading: true 
            }
        case "FETCH_STOCK_SUCCESS":
            return{
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case "FETCH_STOCK_FAILURE":
            return{
                loading: false,
                stocks: [],
                error: action.payload
            }
        default: return state
    }
    return state;
}


export default reducer