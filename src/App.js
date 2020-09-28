import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow.js';


/*
App function displays tickers and prices in chart format
*/
function App() {
  return (
    <div className="App">
     <div className="container">
     <div className = "col-md-5 mt-5">
      <div className = "card">
        <div className = "card-body">
          <ul className = "list-group list-group-flush">
            <StockRow ticker = "AAPL"/>
            <StockRow ticker = "GOOGL"/>
            <StockRow ticker = "KODK"/>
            <StockRow ticker = "NFLX"/>

          </ul>
      </div>
      </div>
      </div>
  </div>
 </div>

  );
}

export default App;
