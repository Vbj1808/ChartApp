import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StockComponent from './StockComponent';
import NftyComponent from './NftyComponent';



const Main = () => {
    return(
        <Switch>
            <Route exact path ="/" component={StockComponent} />
            <Route path="/nfty" component={NftyComponent} />
        </Switch>
    )
}

export default Main;