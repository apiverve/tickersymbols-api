# Ticker Symbols API - Ruby Gem

Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_tickersymbols'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_tickersymbols
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_tickersymbols'

# Initialize the client
client = APIVerve::Tickersymbols::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  symbol: "SHEL",
  market: "GB",
  assetClass: "equity"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ symbol: "SHEL", market: "GB", assetClass: "equity" })
  puts response["data"]
rescue APIVerve::Tickersymbols::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Tickersymbols::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Tickersymbols::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tickersymbols?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tickersymbols?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tickersymbols?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
