import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StockComponent from './StockComponent';
import NftyComponent from './NftyComponent';



const Main = () => {
    return(
        <Switch>
            <Route exact path ="/" component={StockComponent} />
            
        </Switch>
    )
}

export default Main;