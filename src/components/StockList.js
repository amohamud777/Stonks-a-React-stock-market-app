import React, {Component} from 'react';
import {stonk} from '../resources/stonk.js';
import StockRow from './StockRow.js'


/*
Default constructor for each stock row
 */
class StockList extends Component {
  constructor(props){
    super(props)
    this.state = {
      lastTradingDay: null
    }
  }
  componentDidMount(){
    stonk.getLastTradingDay().then((data) => {
      this.setState({
        lastTradingDay: data[0].date
      })
    })
  }

  render(){
    return (
      <ul className = "list-group list-group-flush">
        <StockRow ticker = "AAPL" lastTradingDay ={this.state.lastTradingDay}/>
        <StockRow ticker = "GOOGL" lastTradingDay ={this.state.lastTradingDay}/>
        <StockRow ticker = "KODK" lastTradingDay = {this.state.lastTradingDay}/>
        <StockRow ticker = "NFLX" lastTradingDay = {this.state.lastTradingDay}/>
        <StockRow ticker = "F" lastTradingDay = {this.state.lastTradingDay}/>
      </ul>
    )
  }

}

export default StockList;
