import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import StockChart from './StockChart';
import NftyChart from './NftyChart';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import Header from './HeaderComponent';
import {Input, Button} from 'reactstrap';
import {fetchNfty} from '../redux/nftyData/nftyAction';
import {fetchStock} from '../redux/stockData/stockActions';


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
            <Link to={`/nfty`}>
                <Button outline="none" color="danger" >Click to see nfty stock</Button>
            </Link>
        </div>
        </>
    )
}


StockComponent.propTypes = {
    dailyStock: PropTypes.object.isRequired,
    fetchStock: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    dailyStock: state.dailyStock,

})

export default connect(mapStateToProps,{fetchStock})(StockComponent);