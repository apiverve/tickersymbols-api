# [Ticker Symbols API](https://apiverve.com/marketplace/tickersymbols?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.

The Ticker Symbols API provides a simple, reliable way to integrate ticker symbols functionality into your applications. Built for developers who need production-ready ticker symbols capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/tickersymbols?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/tickersymbols?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/tickersymbols)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.TickerSymbols)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-tickersymbols/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_tickersymbols)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/tickersymbols)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_tickersymbols)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callTickerSymbolsAPI() {
    try {
        const params = new URLSearchParams({
            symbol: 'SHEL',
            market: 'GB',
            assetClass: 'equity'
        });

        const response = await fetch(`https://api.apiverve.com/v1/tickersymbols?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callTickerSymbolsAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/tickersymbols?symbol=SHEL&market=GB&assetClass=equity" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/tickersymbols
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/tickersymbols) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.TickerSymbols
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.TickerSymbols) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-tickersymbols
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-tickersymbols/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_tickersymbols
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_tickersymbols) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/tickersymbols
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/tickersymbols) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_tickersymbols
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_tickersymbols) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:tickersymbols-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/tickersymbols-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Ticker Symbols API](https://apiverve.com/marketplace/tickersymbols?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/tickersymbols](https://docs.apiverve.com/ref/tickersymbols)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Ticker Symbols API is commonly used for:

- **Web Applications** - Add ticker symbols features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with ticker symbols capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Ticker Symbols API:

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

## Support & Community

- 🏠 **API Home**: [Ticker Symbols API](https://apiverve.com/marketplace/tickersymbols?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
