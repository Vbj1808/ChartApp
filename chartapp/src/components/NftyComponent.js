import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import NftyChart from './NftyChart';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Header from './HeaderComponent';
import {Input} from 'reactstrap';
import {fetchNfty} from '../redux/nftyData/nftyAction';


const NftyComponent = ({nftyStock:{nftyStock}, fetchNfty}) => {
    
    useEffect(() => {
        fetchNfty('nfty');
    }, []);

    
    

    const displayTheNfty = () => {
        return(
            <NftyChart nftyStock={nftyStock} nftyStockName={nftyStock.symbol} />
        );
    }

    
    return(
        <>
        
        <div className="container">
            <h1>Average Stock</h1>
            {nftyStock ? displayTheNfty() : null}
        </div>
        </>
    )
}


NftyComponent.propTypes = {
    nftyStock: PropTypes.object.isRequired,
    fetchNfty: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    nftyStock: state.nftyStock
})

export default connect(mapStateToProps,{fetchNfty})(NftyComponent);