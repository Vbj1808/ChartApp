import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import StockComponent from './components/StockComponent';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
   
  );
}

export default App;