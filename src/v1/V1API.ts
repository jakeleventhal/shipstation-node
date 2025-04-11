import type { RateLimitOptions, ShipStationOptions } from '../BaseAPI';
import BaseAPI from '../BaseAPI';
import { Accounts } from './resources/Accounts';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Products } from './resources/Products';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Users } from './resources/Users';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';

// 40 requests per minute - https://www.shipstation.com/docs/api/requirements/#api-rate-limits
const RATE_LIMIT_OPTS: RateLimitOptions = {
  limit: 40,
  interval: 1000 * 60
};

export class V1API extends BaseAPI {
  public accounts: Accounts;
  public carriers: Carriers;
  public fulfillments: Fulfillments;
  public orders: Orders;
  public products: Products;
  public shipments: Shipments;
  public stores: Stores;
  public warehouses: Warehouses;
  public webhooks: Webhooks;
  public users: Users;

  constructor(options?: ShipStationOptions) {
    super('https://ssapi.shipstation.com/', RATE_LIMIT_OPTS, options);

    this.accounts = new Accounts(this);
    this.carriers = new Carriers(this);
    this.fulfillments = new Fulfillments(this);
    this.orders = new Orders(this);
    this.products = new Products(this);
    this.shipments = new Shipments(this);
    this.stores = new Stores(this);
    this.warehouses = new Warehouses(this);
    this.webhooks = new Webhooks(this);
    this.users = new Users(this);
  }
}
