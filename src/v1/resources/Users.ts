import type { ListUsersOptions, ListUsersResponse } from '../types';
import type ShipStation from '../../BaseAPI';
import { BaseResource } from '../../BaseResource';

export class Users extends BaseResource {
  constructor(shipstation: ShipStation) {
    super(shipstation, 'users');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/users/list/)
   *
   * @returns A list of users.
   */
  public async list(params: ListUsersOptions): Promise<ListUsersResponse> {
    return this.shipstation.request<ListUsersResponse>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }
}
