let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());
let port = 3000;
app.listen(port, () => {
  console.log(`Advani company app listening at http://localhost:${port}`);
});

let stocks = [
  {
    id: 1,
    name: "reliance industries",
    price: 2500,
    growth: 3.5,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 2,
    name: "hdfc bank",
    price: 1800,
    growth: 4.2,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 3,
    name: "icici bank",
    price: 1600,
    growth: 5.1,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 4,
    name: "tata consultancy services",
    price: 3200,
    growth: 2.9,
    industry: "finance",
    exchange: "bse",
    price: 1900,
  },
  {
    id: 5,
    name: "infosys",
    price: 2900,
    growth: 3.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 7,
    name: "sun pharmaceutical",
    price: 2300,
    growth: 3.2,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 8,
    name: "cipla",
    growth: 2.6,
    price: 2100,
    exchange: "bse",
    industry: "pharma",
  },
  {
    id: 9,
    name: "ntpc",
    price: 1200,
    growth: 4.1,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 10,
    name: "power grid corporation",
    price: 1500,
    growth: 3.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 11,
    name: "adani power",
    price: 2200,
    growth: 5.3,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 12,
    name: "lupin",
    price: 2000,
    growth: 4.5,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 13,
    name: "axis bank",
    price: 1750,
    growth: 2.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 14,
    name: "state bank of india",
    price: 1450,
    growth: 3.6,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 15,
    name: "bajaj finance",
    price: 2650,
    growth: -2.9,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 17,
    name: "biocon",
    price: 1850,
    growth: 3.9,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 18,
    name: "torrent power",
    price: 1600,
    growth: 2.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 19,
    name: "tata power",
    price: 1750,
    growth: 4.0,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 20,
    name: "jsw energy",
    price: 1450,
    growth: 3.1,
    industry: "power",
    exchange: "bse",
  },
];

/*
Make sure you return the JSON of stocks in the format res.json({ stocks: sortedStocks }) where sortedStocks is the variable name used to store the result
*/

/*
Endpoint 1: Get the stocks sorted by pricing

Write an Express code snippet to sort the stocks based on the pricing low-to-high or high-to-low.

Instructions:

Define an endpoint /stocks/sort/pricing using the get method.

Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.

Send the sorted stocks as a JSON response.

API Call:

<http://localhost:3000/stocks/sort/pricing>


Expected Output:


JSON of sorted stocks low-to-high or high-to-low.

*/

function sortStockByPriceLowToHigh(stockOb1, stockOb2) {
  return stockOb1.price - stockOb2.price;
}
function sortStockByPriceHighToLow(stockOb1, stockOb2) {
  return stockOb2.price - stockOb1.price;
}
app.get("/stocks/sort/pricing", (req, res) => {
  let pricing = req.query.pricing.toLowerCase();

  let sortedStocks;
  if (pricing === "low-to-high") {
    sortedStocks = stocks.slice().sort(sortStockByPriceLowToHigh); // slice tocreate shallow copy and sort take compare function as argument
  } else {
    sortedStocks = stocks.slice().sort(sortStockByPriceHighToLow);
  }
  res.json({ stocks: sortedStocks });
});

/*
Endpoint 2: Get the stocks sorted based on their Growth.

Write an Express code snippet to sort stocks based on their individual growth rate.

Instructions:

Define an endpoint /stocks/sort/growth using the get method.

Define a variable growth to create a condition to sort the stocks based on their growth rate (high-to-low or low-to-high)

Send the filtered stocks as a JSON response.

API Call:

<http://localhost:3000/stocks/sort/growth>
*/
function sortStockByGrowthLowToHigh(stockOb1, stockOb2) {
  return stockOb1.growth - stockOb2.growth;
}
function sortStockByGrowthHighToLow(stockOb1, stockOb2) {
  return stockOb2.growth - stockOb1.growth;
}

app.get("/stocks/sort/growth", (req, res) => {
  let growth = req.query.growth.toLowerCase();
  let sortedStocks;
  if (growth === "low-to-high") {
    sortedStocks = stocks.slice().sort(sortStockByGrowthLowToHigh);
  } else {
    sortedStocks = stocks.slice().sort(sortStockByGrowthHighToLow);
  }
  res.json({ stocks: sortedStocks });
});

/*
Endpoint 3: Filter the stocks based on the 2 Stock Exchange (NSE. and BSE)

Write an Express code snippet to filter stocks based on the two available stock exchanges:

NSE

BSE

Instructions:

Define an endpoint /stocks/filter/exchange using the get method.

Implement a function filterByExchange that returns the stocks of the selected exchange.

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered stocks as a JSON response.

API Call:

<http://localhost:3000/stocks/filter/exchange>
*/
function filterByExchange(stockOb, exchange) {
  return stockOb.exchange.toLowerCase() === exchange.toLowerCase();
}
app.get("/stocks/filter/exchange", (req, res) => {
  let exchange = req.query.exchange;
  let filteredStocks = stocks.filter((stockObj) =>
    filterByExchange(stockObj, exchange),
  );
  res.json({ stocks: filteredStocks });
});

/*
Endpoint 4: Filter the stocks based on the Industrial Sector.

Write an Express code snippet to filter stocks based on the selected sector:

Finance

Pharma

Power

Instructions:

Define an endpoint /stocks/filter/industry using the get method.

Implement a function filterByIndustry that returns the stocks if it meets the selected industry criteria.

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered stocks as a JSON response.

API Call:

<http://localhost:3000/stocks/filter/industry>
*/
function filterByIndustry(stockOb, industry) {
  return stockOb.industry.toLowerCase() === industry.toLowerCase();
}
app.get("/stocks/filter/industry", (req, res) => {
  let industry = req.query.industry;
  let filteredStocks = stocks.filter((stockObj) =>
    filterByIndustry(stockObj, industry),
  );
  res.json({ stocks: filteredStocks });
});

/*
Endpoint 5: Send all available stocks

Write an Express code snippet to send all the stocks

Instructions:

Define an endpoint /stocks using the get method.

Send all the stocks as a JSON response.

API Call:

<http://localhost:3000/stocks>

Expected Output:

JSON of all the stocks
*/
app.get("/stocks", (req, res) => {
  res.json({ stocks: stocks });
});
