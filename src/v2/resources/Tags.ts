import type { GetTagsResponse } from '../types';
import type BaseAPI from '../../BaseAPI';
import { BaseResource } from '../../BaseResource';

export class Tags extends BaseResource {
  constructor(shipstation: BaseAPI) {
    super(shipstation, 'tags');
  }

  /**
   * [Official Documentation](https://docs.shipstation.com/openapi/tags/list_tags)
   *
   * Get a list of all tags associated with an account.
   *
   * @returns A list of tags for the account.
   */
  public async get(): Promise<GetTagsResponse> {
    return this.shipstation.request<GetTagsResponse>({
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
