using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TickerSymbols
{
    /// <summary>
    /// Query options for the Ticker Symbols API
    /// </summary>
    public class TickerSymbolsQueryOptions
    {
        /// <summary>
        /// The ticker symbol to look up, for example AAPL, BRK.B, SHEL or 7203. Returns every listing with that symbol. A suffix such as BP.L, a coin pair such as BTC-USD or a contract such as CL=F narrows it to that market.
        /// </summary>
        [JsonProperty("symbol")]
        public string Symbol { get; set; }

        /// <summary>
        /// Keep only listings on this market: a two-letter market code, CRYPTO, FUTURES or FX for currency pairs.
        /// </summary>
        [JsonProperty("market")]
        public string Market { get; set; }

        /// <summary>
        /// Keep only listings of this asset class.
        /// </summary>
        [JsonProperty("assetClass")]
        public string AssetClass { get; set; }
    }
}
