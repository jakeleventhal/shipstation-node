import type { RateLimitOptions, ShipStationOptions } from '../BaseAPI';
import BaseAPI from '../BaseAPI';
import { Tags } from './resources/Tags';
// 200 requests per minute - https://docs.shipstation.com/rate-limits
const RATE_LIMIT_OPTS: RateLimitOptions = {
  limit: 200,
  interval: 60 * 1000
};

export class V2API extends BaseAPI {
  public tags: Tags;

  constructor(options?: ShipStationOptions) {
    super('https://api.shipstation.com/v2', RATE_LIMIT_OPTS, options);

    this.tags = new Tags(this);
  }
}
