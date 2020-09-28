import {iex}   from '../config/iex.js';

export const stonk = {

  latestPrice: (ticker, callback) => {

    fetch(stonk.latestPriceURL(ticker))
    .then((response) => response.json())
    .then((data) =>  callback(stonk.formatPriceData(data)))
 },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
  },

  formatPriceData: (data) =>{
    const stonkData = data[data.length-1]
    const formattedData = {}
    formattedData.price = stonkData.close
    formattedData.date = stonkData.date
    formattedData.time = stonkData.lab
    return formattedData

  },

  getYesterdaysClose: (ticker, lastTradingDay, callback) => {
    if (lastTradingDay !== "" && lastTradingDay !== undefined) {
      const url = stonk.yesterCloseURL(
        ticker,
        stonk.formatDate(lastTradingDay)
      );
      fetch(url)
        .then((res) => res.json())
        .then((data) => callback(stonk.formatPriceData(data)));
    }

  },
  getLastTradingDay: () => {
    const today = new Date().toISOString().split("T")[0].replace(/-/g, "");
    const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`;
    return fetch(url).then((res) => res.json());
  },

  yesterCloseURL: (ticker, lastTradingDay) => {

    return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=
    20200922&token=${iex.api_token}`
  },

  formatDate: (date) => {
    return new Date(date).toISOString().split("T")[0].replace(/-/g, "");
  },


}
