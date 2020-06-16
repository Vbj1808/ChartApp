import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import StockChart from './StockChart';
import NftyChart from './NftyChart';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Header from './HeaderComponent';
import {Input} from 'reactstrap';
import {fetchNfty} from '../redux/nftyData/nftyAction';
import {fetchStock} from '../redux/stockData/stockActions';

const NftyComponent = ({ nftyStock:{nftyStock}, fetchNfty}) => {
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            fetchNfty('nfty');
            return;
        }
    }, []);
    const displayTheNfty = () => {
        return(
            <NftyChart nftyStock={nftyStock} nftyStockName={nftyStock.symbol} />
        );
    }
    return(
        <div>
            {nftyStock ? displayTheNfty() : null}
        </div>
    )
}


const StockComponent = ({dailyStock:{dailyStock}, fetchStock}) => {
    
    const [symbol,setSymbol] = useState('IBM');
    useEffect(() => {
        fetchStock(symbol);
    }, [symbol]);
    function handleSelect(e){
        console.log(e.target.value);

        setSymbol(e.target.value);
        
    }
    console.log(symbol);
   

    

    const displayTheChart = () => {
        return(
            <StockChart dailyStock={dailyStock} dailyStockName={dailyStock.symbol} />
        );
    }

    

    
    return(
        <>
        <Header />
        <div className="container">
            <Input type="select" defaultValue={symbol} onChange={handleSelect}>
                <option selected value="IBM">IBM</option>
                <option value="TSLA">TSLA</option>
                <option value="AMZN">AMZN</option>
            </Input>
            {dailyStock ? displayTheChart() : null}
            <h1>Average Stock</h1>
            <NftyComponent />
        </div>
        </>
    )
}


StockComponent.propTypes = {
    dailyStock: PropTypes.object.isRequired,
    fetchStock: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    dailyStock: state.dailyStock
})

export default connect(mapStateToProps,{fetchStock})(StockComponent);