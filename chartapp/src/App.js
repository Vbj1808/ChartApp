import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import StockComponent from './components/StockComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StockComponent/>
      </div>
    </Provider>
  );
}

export default App;