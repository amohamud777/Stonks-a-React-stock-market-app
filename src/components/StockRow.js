import React, {Component} from 'react';
import {stonk} from '../resources/stonk.js';




/*
Default constructor for each stock row
 */
class StockRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      price: null,
      date: null,
      time: null,
      dollarChange: 0,
      percentChange: 0
    }
  }

   changeStyle() {
     var color;
     if(this.state.dollarChange > 0) {
        color = '#4caf50'
     }else{
        color = '#e53935'
     }
     return{
       color: color,
       fontSize: '0.8rem',
       marginLeft: 5
     }
  }

  applyData(data){
    console.log(data)
    this.setState({
      price: data.price.toFixed(2),
      date: data.date,
      time: data.time,
    });
    stonk.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
      const dollarChange = (data.price - yesterday.price).toFixed(2)
      const percentChange = (100 * dollarChange /
      yesterday.price).toFixed(2) //Calculates percent changed from yesterday's close to latest price


      this.setState({
        dollarChange: `${dollarChange}` , //yesterday's price is yesterday's close
        percentChange: `(${percentChange}%)`
      })
    })
  }

/*
Pulls latest stock price in each row
*/
  componentDidMount(){
    stonk.latestPrice(this.props.ticker, this.applyData.bind(this))
  }


  render(){
    return (
      <li className = "list-group-item">
        <b>{this.props.ticker}</b> ${this.state.price}
        <span className ="change" style = {this.changeStyle()}>
        {this.state.dollarChange}
        &nbsp;{this.state.percentChange}

        </span>
      </li>

    )
  }

}

export default StockRow;
