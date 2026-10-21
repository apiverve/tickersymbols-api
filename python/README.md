Ticker Symbols API
============

Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-tickersymbols.svg)](https://pypi.org/project/apiverve-tickersymbols/)

This is a Python wrapper for the [Ticker Symbols API](https://apiverve.com/marketplace/tickersymbols?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-tickersymbols
```

Using `pip3`:

```bash
pip3 install apiverve-tickersymbols
```

---

## Configuration

Before using the Ticker Symbols API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient

# Initialize the client with your APIVerve API key
api = TickersymbolsAPIClient("[YOUR_API_KEY]")

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Ticker Symbols API documentation is found here: [https://docs.apiverve.com/ref/tickersymbols](https://docs.apiverve.com/ref/tickersymbols?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient

# Initialize the client with your APIVerve API key
api = TickersymbolsAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `TickersymbolsAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient, TickersymbolsAPIClientError

api = TickersymbolsAPIClient("[YOUR_API_KEY]")

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except TickersymbolsAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient, TickersymbolsAPIClientError

api = TickersymbolsAPIClient("[YOUR_API_KEY]")

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except TickersymbolsAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient, TickersymbolsAPIClientError

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

# Using context manager ensures proper cleanup
with TickersymbolsAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except TickersymbolsAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient

# Enable debug mode
api = TickersymbolsAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_tickersymbols.apiClient import TickersymbolsAPIClient

api = TickersymbolsAPIClient("[YOUR_API_KEY]")

query = {
    "symbol": "SHEL",
    "market": "GB",
    "assetClass": "equity"
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
