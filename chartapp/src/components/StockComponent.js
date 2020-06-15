import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchStocks} from '../redux';

function StockComponent({ stockData, fetchStocks}){
    useEffect(() => {
        fetchStocks()
    }, [])
    return  (
        <div>
            <h2>Stock List</h2>
            <div>
                {stockData && 
                stockData.stocks && 
                stockData.stocks.map(stock => <p>{stock.MetaData}</p>)}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        stockData: state.stock 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockComponent)
