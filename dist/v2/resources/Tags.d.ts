import type { GetTagsResponse } from '../types';
import type BaseAPI from '../../BaseAPI';
import { BaseResource } from '../../BaseResource';
export declare class Tags extends BaseResource {
    constructor(shipstation: BaseAPI);
    /**
     * [Official Documentation](https://docs.shipstation.com/openapi/tags/list_tags)
     *
     * Get a list of all tags associated with an account.
     *
     * @returns A list of tags for the account.
     */
    get(): Promise<GetTagsResponse>;
}
