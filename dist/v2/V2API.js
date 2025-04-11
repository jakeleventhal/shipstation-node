import BaseAPI from '../BaseAPI';
import { Tags } from './resources/Tags';
// 200 requests per minute - https://docs.shipstation.com/rate-limits
const RATE_LIMIT_OPTS = {
    limit: 200,
    interval: 60 * 1000
};
export class V2API extends BaseAPI {
    constructor(options) {
        super('https://api.shipstation.com/v2', RATE_LIMIT_OPTS, options);
        this.tags = new Tags(this);
    }
}
