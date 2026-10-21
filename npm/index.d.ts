declare module '@apiverve/tickersymbols' {
  export interface tickersymbolsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface tickersymbolsResponse {
    status: string;
    error: string | null;
    data: TickerSymbolsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TickerSymbolsData {
      symbol:  null | string;
      search:  null;
      count:   number | null;
      results: { [key: string]: null | string }[];
  }

  export default class tickersymbolsWrapper {
    constructor(options: tickersymbolsOptions);

    execute(callback: (error: any, data: tickersymbolsResponse | null) => void): Promise<tickersymbolsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tickersymbolsResponse | null) => void): Promise<tickersymbolsResponse>;
    execute(query?: Record<string, any>): Promise<tickersymbolsResponse>;
  }
}
