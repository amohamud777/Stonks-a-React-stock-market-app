import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import StockList from './components/StockList.js'

/*
App function displays tickers and prices in chart format
*/

class App extends React.Component{
render() {

  return (
    <div className="App">
      <div className="container">
        <div className = "col-md-5 mt-5">
          <div className = "card">
            <div className = "card-body">
          <StockList/>
            </div>
          </div>
        </div>
      </div>
   </div>

  );
}

}

export default App;
