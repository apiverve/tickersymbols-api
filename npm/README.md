# Ticker Symbols API

Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.

[![npm version](https://img.shields.io/npm/v/@apiverve/tickersymbols.svg)](https://www.npmjs.com/package/@apiverve/tickersymbols)

This is a JavaScript wrapper for the [Ticker Symbols API](https://apiverve.com/marketplace/tickersymbols?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/tickersymbols
```

Using yarn:
```shell
yarn add @apiverve/tickersymbols
```

---

## Configuration

Before using the Ticker Symbols API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Ticker Symbols API documentation is found here: [https://docs.apiverve.com/ref/tickersymbols](https://docs.apiverve.com/ref/tickersymbols?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const tickersymbolsAPI = require('@apiverve/tickersymbols');
const api = new tickersymbolsAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  symbol: "SHEL",
  market: "GB",
  assetClass: "equity"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  symbol: "SHEL",
  market: "GB",
  assetClass: "equity"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  symbol: "SHEL",
  market: "GB",
  assetClass: "equity"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "symbol": "SHEL",
    "search": null,
    "count": 2,
    "results": [
      {
        "symbol": "SHEL",
        "name": "Shell PLC American Depositary Shares (each representing two (2) Ordinary Shares)",
        "market": "US",
        "country": "US",
        "exchange": "XNYS",
        "exchangeName": "New York Stock Exchange",
        "type": "Depositary Receipt",
        "assetClass": "equity",
        "figi": "BBG0147BN6G2",
        "compositeFigi": "BBG0147BN6G2",
        "shareClassFigi": "BBG0147BN6H1",
        "cik": "0001306965"
      },
      {
        "symbol": "SHEL",
        "name": "Shell Plc",
        "market": "GB",
        "country": "GB",
        "exchange": "XLON",
        "exchangeName": "London Stock Exchange",
        "type": "Common Stock",
        "assetClass": "equity",
        "figi": "BBG0149N4YC8",
        "compositeFigi": "BBG0149N4YB9",
        "shareClassFigi": "BBG0149N4YG4",
        "cik": null
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
