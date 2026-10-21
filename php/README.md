# Ticker Symbols API - PHP Package

Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.

## Installation

Install via Composer:

```bash
composer require apiverve/tickersymbols
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Tickersymbols\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'symbol' => 'SHEL',
    'market' => 'GB',
    'assetClass' => 'equity'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Tickersymbols\Client;
use APIVerve\Tickersymbols\Exceptions\APIException;
use APIVerve\Tickersymbols\Exceptions\ValidationException;

try {
    $response = $client->execute(['symbol' => 'SHEL', 'market' => 'GB', 'assetClass' => 'equity']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tickersymbols?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tickersymbols?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tickersymbols?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
