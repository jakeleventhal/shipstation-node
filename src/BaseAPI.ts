import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
import axiosRetry from 'axios-retry';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const stopcock = require('stopcock');

export interface ShipStationRequestOptions extends Pick<AxiosRequestConfig, 'data' | 'params' | 'url'> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export interface ShipStationOptions {
  apiKey?: string;
  apiSecret?: string;
  partnerKey?: string;
  retry?: IAxiosRetryConfig | boolean;
  timeout?: number;
}

export interface RateLimitOptions {
  limit: number;
  interval: number;
}

export default abstract class BaseAPI {
  protected readonly authorizationToken: string;
  protected readonly partnerKey?: string;
  protected readonly timeout?: number;
  protected readonly baseURL: string;

  constructor(baseUrl: string, rateLimitOpts: RateLimitOptions, options?: ShipStationOptions) {
    const key = options?.apiKey ?? process.env.SHIPSTATION_API_KEY;
    const secret = options?.apiSecret ?? process.env.SHIPSTATION_API_SECRET;

    this.partnerKey = options?.partnerKey ?? process.env.SHIPSTATION_PARTNER_KEY;

    if (!key || !secret) {
      throw new Error(
        `API Key and API Secret are required! Set them either in the constructor or as environment variables (SHIPSTATION_API_KEY and SHIPSTATION_API_SECRET).`
      );
    }

    this.baseURL = baseUrl;
    this.authorizationToken = Buffer.from(`${key}:${secret}`).toString('base64');

    // Globally define API ratelimiting
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.request = stopcock(this.request, rateLimitOpts);

    // Retry failed requests
    if (options?.retry) {
      axiosRetry(axios, typeof options.retry === 'boolean' ? undefined : options.retry);
    }
    if (options?.timeout) {
      this.timeout = options.timeout;
    }
  }

  public request = async <T>({ data, method, params, url }: ShipStationRequestOptions) => {
    const response = await axios.request<T>({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Basic ${this.authorizationToken}`,
        ...(this.partnerKey ? { 'x-partner': this.partnerKey } : {})
      },
      data,
      method,
      params,
      timeout: this.timeout,
      url
    });

    return response.data;
  };
}
