import type { AxiosRequestConfig } from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
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
    constructor(baseUrl: string, rateLimitOpts: RateLimitOptions, options?: ShipStationOptions);
    request: <T>({ data, method, params, url }: ShipStationRequestOptions) => Promise<T>;
}
